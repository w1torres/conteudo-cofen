---
title: "5. Modelos tradicionais"
date: 2026-03-19T00:07:51.461Z
---

# 5. Modelos tradicionais

## 1. Definição e Funcionamento

### Cascata
- **Conceito direto**: Modelo sequencial e linear onde cada fase deve ser completamente concluída antes da próxima começar.
- **Como funciona**: Inicia com a coleta de requisitos, seguida por design, implementação, teste, integração, e manutenção.
- **Onde é aplicado**: Projetos com requisitos bem definidos e pouco propensos a mudanças.

### CPM (Critical Path Method)
- **Conceito direto**: Método de gerenciamento de projetos usado para estimar a duração do projeto identificando o caminho crítico através de uma análise de dependências entre as atividades.
- **Como funciona**: Calcula os tempos mais cedo e mais tarde que cada atividade pode começar e terminar sem atrasar o projeto.
- **Onde é aplicado**: Projetos de construção civil, desenvolvimento de software, pesquisa e desenvolvimento.

### CCPM (Critical Chain Project Management)
- **Conceito direto**: Método de planejamento e gerenciamento de projetos que enfatiza a importância dos recursos humanos e físicos necessários para executar as tarefas do projeto.
- **Como funciona**: Concentra-se na flexibilização de cronogramas, usando buffers para gerenciar incertezas e garantir a conclusão do projeto no prazo.
- **Onde é aplicado**: Projetos em ambientes de alta incerteza e com recursos limitados.

## 2. Pontos Críticos de Prova

- **Cascata**: Importante reconhecer que não permite um retorno fácil a fases anteriores.
- **CPM**: A identificação do caminho crítico é crucial, pois este é o sequenciamento de atividades que determina a duração do projeto.
- **CCPM**: Diferencia-se por sua abordagem na gestão de recursos e na utilização de buffers para proteger o cronograma do projeto.

## 3. Pegadinhas Comuns

- Confundir CPM com CCPM: CPM foca no caminho crítico das atividades, enquanto CCPM foca nos recursos e na gestão de buffers.
- Acreditar que o modelo Cascata não permite nenhuma forma de revisão: embora rígido, ajustes são possíveis, mas custosos e desencorajados.
- Pensar que CCPM não considera a sequência de atividades: ainda que o foco seja em recursos e buffers, a sequência de atividades é fundamental para a definição dos buffers.

## 4. Aplicação Prática

Não aplicável diretamente a código/comando, mas a situações de gerenciamento de projetos.

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Cascata | Modelo sequencial e linear de desenvolvimento de software. | "Permite fácil revisão de fases anteriores." (Errado) |
| CPM | Método para estimar a duração do projeto identificando o caminho crítico. | "Foca nos recursos necessários para as tarefas." (Errado, isso descreve CCPM) |
| CCPM | Método que enfatiza a gestão de recursos e uso de buffers. | "Ignora a sequência de atividades." (Errado, a sequência é importante para definir buffers) |

## 6. Simulado (Certo ou Errado)

1. O modelo Cascata é altamente flexível e encoraja mudanças frequentes nos requisitos. (Errado)
2. No CPM, a identificação do caminho crítico é essencial para determinar a duração mínima do projeto. (Certo)
3. CCPM utiliza buffers de tempo para proteger a linha do tempo do projeto contra incertezas. (Certo)
4. No modelo Cascata, após iniciar uma fase, não é possível revisar ou alterar fases anteriores. (Errado, é possível, porém difícil e desencorajado)
5. CPM e CCPM são métodos que não consideram a importância dos recursos humanos no projeto. (Errado, especialmente CCPM foca em recursos, incluindo humanos)

### Gabarito comentado:

1. **Errado**. O modelo Cascata é conhecido por sua rigidez e dificuldade em acomodar mudanças uma vez que uma fase é concluída.
2. **Certo**. Identificar o caminho crítico permite aos gestores entenderem quais atividades não podem sofrer atrasos sem afetar a duração total do projeto.
3. **Certo**. CCPM é distinto por sua abordagem na gestão de incertezas, utilizando buffers para absorver atrasos e garantir a entrega no prazo.
4. **Errado**. Embora o modelo Cascata seja sequencial e cada fase dependa da conclusão da anterior, é um equívoco absoluto afirmar que revisões são impossíveis.
5. **Errado**. Especialmente CCPM, que foca na otimização do uso de recursos, incluindo os humanos, para melhorar a eficiência e eficácia do projeto.
