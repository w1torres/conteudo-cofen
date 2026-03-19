---
title: "2. Modelagem lógica e física"
date: 2026-03-19T00:13:47.488Z
---

# 2. Modelagem lógica e física

## 1. Definição e Funcionamento

A modelagem de dados é um processo usado para definir e analisar os requisitos de dados necessários para suportar os processos de negócio de uma organização. A **modelagem lógica** envolve a criação de um modelo abstrato que organiza os dados de forma independente do sistema de gestão de banco de dados (SGBD) específico. Já a **modelagem física** lida com a implementação do modelo no SGBD, considerando aspectos como armazenamento de dados, índices e restrições de integridade.

## 2. Pontos Críticos de Prova

- **Normalização**: processo de organização dos campos e tabelas de um banco de dados para minimizar a redundância e dependência.
- **Classificações**: entidades, atributos, relações e chaves (primária, estrangeira).
- **Exceções**: em alguns casos, a desnormalização é aceitável para melhorar o desempenho das consultas.

## 3. Pegadinhas Comuns

- Confundir **modelagem lógica** com **modelagem física**.
- Acreditar que a normalização é sempre desejável, ignorando os casos de desnormalização por desempenho.
- Confusão entre **chave primária** e **chave estrangeira**.

## 4. Aplicação Prática

Exemplo de SQL para criação de uma tabela (modelagem física):

```sql
CREATE TABLE Cliente (
    ClienteID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100) UNIQUE
);
```

Neste exemplo, `ClienteID` é uma chave primária que identifica unicamente cada registro na tabela `Cliente`.

## 5. Tabela Resumo

| Conceito          | Definição                                                                 | Pegadinha                         |
|-------------------|---------------------------------------------------------------------------|-----------------------------------|
| Modelagem Lógica  | Organiza dados de forma abstrata, independente do SGBD.                   | Confundir com modelagem física.   |
| Modelagem Física  | Implementação do modelo no SGBD, considerando armazenamento e restrições. | Ignorar a importância do desempenho. |
| Normalização      | Processo para minimizar redundância nos dados.                            | Acreditar que é sempre necessária.|

## 6. Simulado (Certo ou Errado)

1. A modelagem lógica deve considerar o tipo de SGBD onde os dados serão armazenados. (Errado)
2. A normalização é um processo que pode ser completamente ignorado se o foco for o desempenho. (Errado)
3. Chaves estrangeiras são usadas para estabelecer uma ligação entre tabelas, garantindo a integridade referencial. (Certo)
4. A desnormalização nunca é uma prática aceitável na modelagem de dados. (Errado)
5. Índices são considerados apenas na fase de modelagem física, não na lógica. (Certo)

Gabarito comentado:

1. Errado. A modelagem lógica é independente do SGBD, focando na estrutura dos dados sem considerar aspectos específicos de implementação.
2. Errado. Embora a normalização seja importante para evitar redundâncias, em alguns casos, a desnormalização pode ser adotada para melhorar o desempenho das consultas.
3. Certo. Chaves estrangeiras são fundamentais para manter a integridade referencial entre tabelas, permitindo que dados relacionados sejam consistentes.
4. Errado. A desnormalização pode ser uma prática aceitável e até recomendada em situações onde o desempenho de leitura é crítico e a redundância de dados controlada não impacta negativamente.
5. Certo. Índices são uma consideração de desempenho e, portanto, fazem parte da modelagem física, onde detalhes específicos de implementação são definidos.
