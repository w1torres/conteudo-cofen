---
title: "2. Discretização"
date: 2026-03-19T00:15:15.860Z
---

# 2. Discretização

## 1. Definição e Funcionamento

- **Conceito direto**: A discretização é um processo de transformação de dados contínuos em um conjunto finito de intervalos ou categorias, com o objetivo de simplificar a análise e o processamento dos dados.
- **Como funciona**: Dados contínuos, como medidas de temperatura, tempo ou distância, são divididos em intervalos ou categorias discretas. Cada valor contínuo é então mapeado para uma categoria ou intervalo específico.
- **Onde é aplicado**: Utilizado em análise de dados, mineração de dados, aprendizado de máquina e estatística, especialmente útil para algoritmos que trabalham melhor com atributos categóricos.

## 2. Pontos Críticos de Prova

- **Regras importantes**: A discretização deve preservar a integridade dos dados originais tanto quanto possível, minimizando a perda de informação.
- **Classificações**: Existem dois tipos principais de discretização: supervisionada, que utiliza a informação do atributo-alvo para guiar a discretização; e não supervisionada, que não utiliza informações externas.
- **Exceções**: A discretização pode não ser a melhor abordagem para todos os tipos de dados ou análises, especialmente quando a preservação da informação contínua é crítica.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir discretização com binarização, onde a binarização é um caso específico de discretização que divide os dados em apenas dois grupos.
- **Termos que mudam o sentido**: Afirmar que a discretização "sempre" melhora o desempenho de modelos de aprendizado de máquina pode ser enganoso, pois depende do contexto e do tipo de dados.
- **Diferenças entre conceitos próximos**: Diferenciar claramente entre discretização e quantização, onde a quantização é focada na redução do número de bits necessários para representar o dado.

## 4. Aplicação Prática

- **Exemplo simples**:
```python
# Exemplo de discretização em Python usando pandas
import pandas as pd

# Dados contínuos de exemplo
data = {'idade': [22, 35, 58, 45, 26]}
df = pd.DataFrame(data)

# Discretizando a idade em categorias
df['faixa_etaria'] = pd.cut(df['idade'], bins=[0, 18, 40, 60, 100], labels=["Jovem", "Adulto", "Meia-idade", "Idoso"])

print(df)
```
- **Situação real**: Em um banco de dados de clientes, a discretização da idade em faixas etárias pode ajudar na segmentação de mercado e no direcionamento de campanhas de marketing.

## 5. Tabela Resumo

| Conceito      | Definição                                                                 | Pegadinha                      |
|---------------|---------------------------------------------------------------------------|--------------------------------|
| Discretização | Processo de transformar dados contínuos em categorias discretas.          | Confundir com binarização.     |
| Supervisionada| Discretização guiada pela informação do atributo-alvo.                    | Pensar que é o único tipo.     |
| Não supervisionada | Discretização sem guia externo.                                            | Esquecer em análises gerais.   |

## 6. Simulado (Certo ou Errado)

1. A discretização transforma dados qualitativos em quantitativos. (Errado)
2. Binarização é um tipo específico de discretização. (Certo)
3. A discretização supervisionada não utiliza o atributo-alvo para guiar o processo. (Errado)
4. Em todos os casos, a discretização melhora o desempenho de algoritmos de aprendizado de máquina. (Errado)
5. A discretização pode ser aplicada para simplificar a visualização de dados contínuos. (Certo)

**Gabarito comentado**:

1. **Errado**: A discretização transforma dados contínuos em categorias discretas, não de qualitativo para quantitativo.
2. **Certo**: Binarização é um processo onde os dados são divididos em dois grupos, sendo um caso específico de discretização.
3. **Errado**: A discretização supervisionada utiliza sim o atributo-alvo para orientar a divisão dos dados.
4. **Errado**: A afirmação é muito absoluta. A discretização pode melhorar ou não o desempenho de algoritmos de aprendizado de máquina, dependendo do contexto e do tipo de dados.
5. **Certo**: A discretização pode facilitar a visualização e interpretação de dados contínuos ao agrupá-los em categorias mais gerenciáveis.
