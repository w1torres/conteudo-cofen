import fs from 'fs-extra';
import path from 'path';
import { prepareDirectories } from './generator/createStructure.js';
import { generateAIContent } from './ai/client.js';
import { buildPrompt } from './generator/promptBuilder.js';

async function main() {
  console.log("🚀 Iniciando geração do material...");

  const edital = await fs.readJson('./edital/edital.json');
  await prepareDirectories(edital);

  for (const disc of edital.disciplinas) {
    console.log(`\n📚 Processando área: ${disc.area}`);

    for (const item of disc.topics) {
      // Cria um nome de arquivo amigável (slug)
      const safeFileName = item.topic
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9]/g, "-") // Remove caracteres especiais
        .replace(/-+/g, "-") // Remove hífens duplicados
        .substring(0, 50); // Limita tamanho

      const filePath = path.join(process.cwd(), 'content', disc.id, `${safeFileName}.md`);

      if (await fs.pathExists(filePath)) {
        console.log(`  ⏩ Pulando: ${item.topic}`);
        continue;
      }

      console.log(`  📝 Gerando: ${item.topic}...`);
      
      // Passa disciplina, tópico e os detalhes do seu JSON para o prompt
      const prompt = buildPrompt(disc.area, item.topic, item.details);
      const content = await generateAIContent(prompt);

      const frontmatter = `---
title: "${item.topic}"
date: ${new Date().toISOString()}
---

${content}
`;
      await fs.writeFile(filePath, frontmatter);
    }
  }
  console.log("\n✅ Material gerado com sucesso!");
}

main().catch(console.error);