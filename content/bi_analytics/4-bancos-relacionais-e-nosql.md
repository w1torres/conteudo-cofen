---
title: "4. Bancos relacionais e NoSQL"
date: 2026-03-19T00:12:32.160Z
---

# 4. Bancos relacionais e NoSQL

## 1. Definição e Funcionamento

Bancos de dados relacionais são sistemas de gerenciamento de banco de dados (SGBD) que seguem o modelo relacional, o qual organiza os dados em tabelas (relações) compostas por linhas e colunas. Exemplos incluem Oracle, SQL Server, PostgreSQL e MySQL. Eles utilizam a linguagem SQL (Structured Query Language) para manipulação e consulta de dados.

Bancos de dados NoSQL, por outro lado, são projetados para armazenar, distribuir e acessar dados que não se encaixam bem no modelo relacional. NoSQL abrange uma ampla gama de tecnologias e modelos de dados, como chave-valor, documentos, colunas largas e grafos.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Bancos de dados relacionais utilizam esquemas fixos e suportam operações ACID (Atomicidade, Consistência, Isolamento, Durabilidade). Bancos NoSQL, embora possam oferecer flexibilidade de esquema, consistência eventual e escalabilidade horizontal, podem não garantir todas as propriedades ACID.
  
- **Classificações**: Oracle, SQL Server, PostgreSQL e MySQL são classificados como bancos de dados relacionais. MongoDB, Cassandra, Redis e Neo4j são exemplos de bancos de dados NoSQL, cada um representando um modelo de dados NoSQL diferente.

- **Exceções**: Alguns bancos de dados NoSQL começaram a oferecer suporte a transações ACID, como MongoDB com suas transações multi-documento.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Associar NoSQL exclusivamente a não-relacional quando, na verdade, NoSQL significa "Not Only SQL", indicando suporte a modelos além do relacional.
  
- **Termos que mudam o sentido**: Acreditar que "SQL" refere-se apenas a bancos de dados relacionais, quando na verdade é uma linguagem de consulta que pode ser usada em alguns contextos NoSQL.
  
- **Diferenças entre conceitos próximos**: Confundir escalabilidade horizontal (facilmente alcançada por NoSQL) com escalabilidade vertical (mais comum em bancos de dados relacionais).

## 4. Aplicação Prática

**Exemplo simples**:

SQL para inserir dados em um banco relacional:
```sql
INSERT INTO Usuarios (nome, email) VALUES ('João Silva', 'joao.silva@email.com');
```

Comando para inserir documento em MongoDB (NoSQL):
```json
db.usuarios.insertOne({ nome: "João Silva", email: "joao.silva@email.com" });
```

**Situação real**: Um site de e-commerce pode usar PostgreSQL para gerenciar dados de usuários e pedidos (relacionais) e MongoDB para gerenciar catálogos de produtos e recomendações personalizadas (documentos NoSQL).

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Relacional | SGBD baseado no modelo relacional, usando SQL. | Pensar que só existe SQL para bancos relacionais. |
| NoSQL | SGBD para dados não-relacionais, suportando vários modelos de dados. | Acreditar que NoSQL não suporta transações ACID. |
| ACID | Propriedades de transação em bancos de dados. | Associar exclusivamente a bancos relacionais. |

## 6. Simulado (Certo ou Errado)

1. Todos os bancos de dados NoSQL não suportam transações ACID. (Errado)
2. PostgreSQL é um exemplo de banco de dados NoSQL. (Errado)
3. NoSQL é exclusivamente para dados não-relacionais. (Errado)
4. Oracle e SQL Server não permitem escalabilidade horizontal. (Errado)
5. MongoDB permite armazenamento de dados em formato de documentos. (Certo)

**Gabarito comentado**:

1. Errado. Alguns sistemas NoSQL, como MongoDB, começaram a oferecer suporte a transações ACID.
2. Errado. PostgreSQL é um sistema de gerenciamento de banco de dados relacional.
3. Errado. NoSQL significa "Not Only SQL", indicando que suporta, mas não se limita a, modelos não-relacionais.
4. Errado. Embora tradicionalmente projetados para escalabilidade vertical, com arquiteturas apropriadas e tecnologias como sharding, Oracle e SQL Server podem alcançar escalabilidade horizontal.
5. Certo. MongoDB é um banco de dados orientado a documentos, permitindo o armazenamento de dados em formato de documentos.
