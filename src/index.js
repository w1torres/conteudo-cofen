import fs from 'fs-extra';
import path from 'path';
import { prepareDirectories } from './generator/createStructure.js';
import { generateAIContent } from './ai/client.js';
import { buildPrompt } from './generator/promptBuilder.js';

async function main() {
  console.log("🚀 Iniciando geração do material...");

  const TEST_MODE = false; // 🔥 ativa/desativa teste
  const TEST_TOPIC_ID = "es-4"; // 👈 escolha o tópico
  const FORCE_REGENERATE = true; // 🔥 força recriar conteúdo

  const edital = await fs.readJson('./edital/edital.json');
  await prepareDirectories(edital);

  for (const disc of edital.disciplinas) {
    console.log(`\n📚 Processando área: ${disc.area}`);

    for (const item of disc.topics) {
  
      // 🔥 MODO TESTE (filtra apenas 1 tópico)
      if (TEST_MODE && item.id !== TEST_TOPIC_ID) {
        continue;
      }

      const safeFileName = item.topic
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .substring(0, 50);

      const filePath = path.join(process.cwd(), 'content', disc.id, `${safeFileName}.md`);

      const exists = await fs.pathExists(filePath);

      if (!FORCE_REGENERATE && exists) {
        const content = await fs.readFile(filePath, 'utf-8');

        if (content.length > 200) {
          console.log(`  ⏩ Pulando (já preenchido): ${item.topic}`);
          continue;
        }
      }

      console.log(`  📝 Gerando: ${item.topic}...`);

      const prompt = buildPrompt(disc.area, item.topic, item.details);

      // 🔍 DEBUG DO PROMPT
      console.log("\n📤 Prompt (preview):\n", prompt.substring(0, 300), "...\n");

      const content = await generateAIContent(prompt);

      const frontmatter = `---
title: "${item.topic}"
date: ${new Date().toISOString()}
---

${content}
`;

      await fs.writeFile(filePath, frontmatter);

      // 🔥 para após 1 geração
      if (TEST_MODE) {
        console.log("\n🧪 TESTE FINALIZADO (1 conteúdo gerado)");
        return;
      }
    }
  }

  console.log("\n✅ Material gerado com sucesso!");
}

main().catch(console.error);