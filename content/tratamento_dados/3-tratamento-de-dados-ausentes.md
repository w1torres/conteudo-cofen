---
title: "3. Tratamento de dados ausentes"
date: 2026-03-19T00:15:52.747Z
---

# 3. Tratamento de dados ausentes

## 1. Definição e Funcionamento

O tratamento de dados ausentes refere-se ao conjunto de técnicas utilizadas para lidar com valores que não estão presentes em um dataset. Esses valores podem estar ausentes por diversas razões, como falhas na coleta de dados, erros de entrada ou omissões. O tratamento adequado desses dados é crucial para a análise estatística e para a construção de modelos de machine learning, pois dados ausentes podem levar a conclusões errôneas ou a modelos imprecisos.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Dados ausentes podem ser tratados de várias maneiras, incluindo a exclusão de registros, a imputação de valores (substituição por média, mediana, ou por um valor constante) e a utilização de modelos que suportam dados ausentes.
- **Classificações**: Dados ausentes são classificados em três tipos: completamente aleatórios (MCAR), aleatórios (MAR), e não aleatórios (MNAR), cada um requerendo uma abordagem específica de tratamento.
- **Exceções**: Nem sempre a exclusão de registros com dados ausentes é a melhor opção, especialmente se a ausência dos dados não for completamente aleatória, o que pode introduzir viés no modelo.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir dados ausentes com zeros ou com strings vazias. Dados ausentes representam a falta de informação, enquanto zeros ou strings vazias podem ser valores válidos em determinados contextos.
- **Termos que mudam o sentido**: Afirmar que dados ausentes "sempre" devem ser excluídos ou "somente" podem ser tratados com imputação. A escolha do método depende da natureza dos dados e do objetivo da análise.
- **Diferenças entre conceitos próximos**: Confundir dados ausentes (missing data) com dados nulos (null values). Embora ambos representem a falta de valor, o contexto de uso e tratamento pode variar.

## 4. Aplicação Prática

```python
# Exemplo simples de imputação de média com Python e pandas
import pandas as pd
import numpy as np

# Criando um DataFrame de exemplo
df = pd.DataFrame({'A': [1, 2, np.nan, 4, 5],
                   'B': [np.nan, 2, 3, 4, 5]})

# Imputação de média na coluna A
df['A'].fillna(df['A'].mean(), inplace=True)

print(df)
```

**Situação real**: Em um dataset de pacientes de um hospital, os valores ausentes na coluna "Peso" podem ser imputados usando a média, assumindo que os dados ausentes são MCAR (Missing Completely at Random).

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| MCAR | Dados ausentes completamente ao acaso | Confundir com MAR ou MNAR |
| MAR | Dados ausentes aleatoriamente, dependendo de informações observadas | Achar que sempre é possível identificar |
| MNAR | Dados ausentes não aleatoriamente, dependendo de informações não observadas | Supor que o tratamento é igual ao de MCAR |

## 6. Simulado (Certo ou Errado)

1. Dados ausentes sempre devem ser tratados com a exclusão do registro. (Errado)
2. A imputação por média é uma técnica válida para todos os tipos de dados ausentes. (Errado)
3. Dados ausentes classificados como MCAR não introduzem viés no modelo se ignorados. (Certo)
4. Confundir dados nulos com dados ausentes pode levar à aplicação incorreta de técnicas de tratamento. (Certo)
5. A imputação de valores deve ser evitada em datasets com uma grande proporção de dados ausentes. (Certo)

**Gabarito comentado:**

1. **Errado**: A exclusão de registros é apenas uma das várias técnicas de tratamento e pode não ser a melhor opção, dependendo do caso.
2. **Errado**: A imputação por média pode não ser adequada para dados categóricos ou em casos de MNAR, onde a média pode introduzir viés.
3. **Certo**: MCAR significa que a ausência dos dados é completamente aleatória, não tendo impacto na análise se ignorada.
4. **Certo**: Dados nulos e dados ausentes podem ter significados diferentes e requerem abordagens distintas de tratamento.
5. **Certo**: A imputação em datasets com muitos dados ausentes pode introduzir um grande viés, sendo preferível outras técnicas ou a coleta de mais dados.
