---
title: "4. Outliers e agregações"
date: 2026-03-19T00:16:22.178Z
---

# 4. Outliers e agregações

## 1. Definição e Funcionamento

- **Conceito direto**: Outliers são valores que se desviam significativamente do restante dos dados, enquanto agregações são processos utilizados para resumir ou combinar múltiplos valores em um único valor representativo.
- **Como funciona**: Outliers são identificados através de métodos estatísticos, como o uso de boxplots ou desvios padrão. Agregações, por outro lado, são realizadas através de operações matemáticas ou estatísticas, como soma, média, mediana, entre outras.
- **Onde é aplicado**: Ambos são aplicados em análise de dados, ciência de dados, e sistemas de informação para limpeza, preparação e análise de grandes volumes de dados.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Identificação de outliers deve considerar a distribuição dos dados; agregações devem ser escolhidas com base no tipo de análise desejada.
- **Classificações**: Outliers podem ser classificados como pontuais, contextuais ou coletivos. Agregações podem ser temporais, espaciais, ou por categoria.
- **Exceções**: Nem sempre outliers são erros ou ruídos; em alguns contextos, podem representar informações valiosas.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir outliers com erros de dados; assumir que a remoção de outliers é sempre necessária.
- **Termos que mudam o sentido**: Afirmar que outliers "sempre" indicam problemas; dizer que agregações "somente" simplificam os dados.
- **Diferenças entre conceitos próximos**: Diferenciar entre outliers (valores anômalos) e ruídos (variações aleatórias).

## 4. Aplicação Prática

- **Exemplo simples**:
```sql
-- Identificando a média de vendas, excluindo outliers
SELECT AVG(vendas) FROM tabela_vendas
WHERE vendas NOT BETWEEN (SELECT AVG(vendas) - 3*STDDEV(vendas) FROM tabela_vendas)
AND (SELECT AVG(vendas) + 3*STDDEV(vendas) FROM tabela_vendas);
```
- **Situação real**: Uma empresa de e-commerce quer entender o desempenho médio de vendas, excluindo dias com promoções excepcionais (outliers) para uma análise mais estável.

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Outliers | Valores que se desviam significativamente dos demais dados | Confundir com erros de dados |
| Agregações | Processos para combinar múltiplos valores em um único valor representativo | Assumir que simplificam os dados "somente" |

## 6. Simulado (Certo ou Errado)

1. Outliers são sempre indicativos de erros nos dados. (Errado)
2. A mediana é uma forma de agregação imune ao efeito de outliers. (Certo)
3. Agregações podem ser realizadas apenas em dados numéricos. (Errado)
4. A remoção de outliers é obrigatória em qualquer análise de dados. (Errado)
5. Outliers contextuais dependem apenas do valor absoluto do dado. (Errado)

**Gabarito comentado**:

1. **Errado**. Outliers podem representar tanto erros quanto variações naturais importantes dos dados.
2. **Certo**. A mediana, ao contrário da média, não é afetada por valores extremamente altos ou baixos, tornando-a resistente a outliers.
3. **Errado**. Agregações podem ser aplicadas a dados não numéricos também, como operações de concatenação em strings ou operações lógicas em dados booleanos.
4. **Errado**. A decisão de remover ou não outliers deve ser baseada no contexto da análise e na natureza dos dados.
5. **Errado**. Outliers contextuais são identificados considerando o contexto em que os dados foram coletados, não apenas pelo valor absoluto.
