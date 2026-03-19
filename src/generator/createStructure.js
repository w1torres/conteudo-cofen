import fs from 'fs-extra';
import path from 'path'; // <--- ESTA LINHA ESTÁ FALTANDO

export async function prepareDirectories(edital) {
  const baseContentPath = path.join(process.cwd(), 'content'); 
  await fs.ensureDir(baseContentPath);

  for (const [dIdx, disc] of edital.disciplinas.entries()) {
    const discPath = path.join(baseContentPath, disc.id);
    await fs.ensureDir(discPath);
    
    const indexContent = `---
title: "${disc.area}"
weight: ${(dIdx + 1) * 10}
---

Selecione um tópico de ${disc.area} para estudar.`;

    await fs.writeFile(path.join(discPath, '_index.md'), indexContent);
  }
}