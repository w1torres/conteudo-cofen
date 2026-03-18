import fs from 'fs-extra';
import path from 'path'; // <--- ESTA LINHA ESTÁ FALTANDO

export async function prepareDirectories(edital) {
  // Agora o 'path' funcionará aqui:
  const baseContentPath = path.join(process.cwd(), 'content'); 
  await fs.ensureDir(baseContentPath);

  for (const [dIdx, disc] of edital.disciplinas.entries()) {
    const discPath = path.join(baseContentPath, disc.id);
    await fs.ensureDir(discPath);
    
    // Usando dIdx para manter a ordem crescente (weight)
    const indexContent = `---\ntitle: "${disc.area}"\nweight: ${(dIdx + 1) * 10}\n---\n\nSelecione um tópico de ${disc.area} para estudar.`;
    await fs.writeFile(path.join(discPath, '_index.md'), indexContent);

    // Se você já tiver os tópicos no seu JSON do edital:
    if (disc.topicos) {
      for (const [tIdx, topico] of disc.topicos.entries()) {
        const topicoPath = path.join(discPath, `${topico.id}.md`);
        // O weight garante a ordem correta dos tópicos dentro da disciplina
        const topicoContent = `---\ntitle: "${topico.nome}"\nweight: ${tIdx + 1}\n---\n\nConteúdo sendo gerado...`;
        await fs.writeFile(topicoPath, topicoContent);
      }
    }
  }
}