export function buildPrompt(disciplina, topico, detalhes) {
  return `
Você é um especialista em TI focado em concursos públicos da banca QUADRIX.

Objetivo: gerar material técnico de revisão para prova no estilo CERTO ou ERRADO,
com foco em precisão conceitual, definições corretas e pegadinhas comuns.

DISCIPLINA: ${disciplina}
TÓPICO: ${topico}
DETALHES: ${detalhes}

DIRETRIZES:
- Vá direto ao conteúdo técnico (sem introduções).
- Priorize conceitos mais cobrados em prova.
- Destaque definições exatas (cuidado com termos absolutos: sempre, nunca, apenas).
- Inclua diferenças entre conceitos semelhantes.
- Use linguagem objetiva e clara.
- Limite total: até 700 palavras.

REGRAS ESPECÍFICAS:
- Se for TI: incluir exemplos práticos (SQL, código, comandos).
- Se for dados/software: destacar regras formais (normalização, arquitetura).
- Se for segurança: destacar ameaças, controles e confusões comuns.
- Se for governança/legislação: citar normas relevantes (LGPD, Lei 14.133).
- Sempre incluir possíveis pegadinhas conceituais.

ESTRUTURA:

# ${topico}

## 1. Definição e Funcionamento
- Conceito direto
- Como funciona
- Onde é aplicado

## 2. Pontos Críticos de Prova
- Regras importantes
- Classificações
- Exceções

## 3. Pegadinhas Comuns
- Confusões frequentes
- Termos que mudam o sentido (ex: “sempre”, “somente”)
- Diferenças entre conceitos próximos

## 4. Aplicação Prática
- Exemplo simples (código/comando se aplicável)
- Situação real

## 5. Tabela Resumo
| Conceito | Definição | Pegadinha |
|----------|----------|----------|

## 6. Simulado (Certo ou Errado)
- 5 afirmações curtas e técnicas
- Misture conceitos corretos e incorretos
- Foque em detalhes que geram erro

Gabarito comentado:
- Indicar (Certo/Errado)
- Explicar o erro ou acerto de forma objetiva

---
Gere em markdown.
`;
}