---
title: "5. Estruturas de dados em banco"
date: 2026-03-18T23:59:01.032Z
---

# 5. Estruturas de dados em banco

## 1. Definição e Funcionamento

### Conceito direto
Estruturas de dados em banco de dados são modelos organizacionais que permitem o armazenamento, a manipulação e a recuperação eficiente de dados. Incluem tabelas, views, índices, chaves e relacionamentos.

### Como funciona
- **Tabelas**: Estruturas que armazenam dados em linhas e colunas.
- **Views**: Representações virtuais de dados, que podem vir de uma ou mais tabelas.
- **Índices**: Estruturas que melhoram a velocidade de busca nos dados.
- **Chaves**: Atributos que identificam de maneira única as linhas em uma tabela.
- **Relacionamentos**: Ligações entre tabelas que definem como os dados se relacionam entre si.

### Onde é aplicado
Utilizado em sistemas de gerenciamento de banco de dados (SGBDs) para organizar e facilitar o acesso a grandes volumes de dados.

## 2. Pontos Críticos de Prova

### Regras importantes
- **Chave Primária (PK)**: Identificador único de registros em uma tabela.
- **Chave Estrangeira (FK)**: Coluna que cria um relacionamento entre duas tabelas.
- **Índice Clusterizado**: Organiza fisicamente os dados da tabela baseado no índice.
- **Índice Não Clusterizado**: Mantém uma estrutura separada da tabela, apenas com o índice e um ponteiro para o dado.

### Classificações
- **Views**: Podem ser atualizáveis ou somente leitura.
- **Relacionamentos**: Um-para-um, um-para-muitos, muitos-para-muitos.

### Exceções
- Nem todas as views são atualizáveis.
- Índices podem impactar negativamente o desempenho de inserção, atualização e deleção de dados.

## 3. Pegadinhas Comuns

### Confusões frequentes
- Confundir chave primária com chave estrangeira.
- Acreditar que todos os índices aceleram todas as operações no banco de dados.

### Termos que mudam o sentido
- “Sempre” usar índices para melhorar a performance (não considera o impacto em operações de escrita).
- “Somente” views são virtuais (tabelas temporárias também são estruturas de dados não-persistentes).

### Diferenças entre conceitos próximos
- Índice Clusterizado x Não Clusterizado.
- View atualizável x somente leitura.

## 4. Aplicação Prática

### Exemplo simples
```sql
CREATE TABLE Alunos (
    AlunoID INT PRIMARY KEY,
    Nome VARCHAR(100)
);

CREATE INDEX idx_nome ON Alunos(Nome);
```

### Situação real
Implementação de um índice não clusterizado em uma coluna frequentemente usada em consultas para melhorar a performance de leitura em um sistema de gerenciamento escolar.

## 5. Tabela Resumo

| Conceito         | Definição                                                                 | Pegadinha                   |
|------------------|---------------------------------------------------------------------------|-----------------------------|
| Tabelas          | Estruturas de linhas e colunas para armazenamento de dados.               | N/A                         |
| Views            | Representações virtuais de uma ou mais tabelas.                           | Confundir com tabelas físicas. |
| Índices          | Estruturas para acelerar a recuperação de dados.                          | Pensar que sempre melhoram a performance. |
| Chaves           | Atributos para identificação única (PK) ou relacionamento (FK).           | Confundir PK com FK.        |
| Relacionamentos  | Ligações entre tabelas que definem como os dados se relacionam.           | N/A                         |

## 6. Simulado (Certo ou Errado)

1. Uma chave estrangeira é utilizada para garantir a integridade referencial entre duas tabelas. (Certo)
2. Índices não clusterizados organizam fisicamente os dados da tabela. (Errado)
3. Todas as views são atualizáveis. (Errado)
4. Uma chave primária pode consistir em mais de uma coluna. (Certo)
5. Relacionamentos muitos-para-muitos podem ser implementados diretamente entre duas tabelas. (Errado)

### Gabarito comentado:

1. **Certo**: Chave estrangeira (FK) assegura que o valor na coluna de uma tabela corresponde ao valor de uma chave primária em outra tabela.
2. **Errado**: Índices não clusterizados não organizam fisicamente os dados da tabela; isso é característico de índices clusterizados.
3. **Errado**: Nem todas as views são atualizáveis, dependendo da complexidade da consulta SQL que as define.
4. **Certo**: Chaves primárias compostas são formadas por mais de uma coluna para identificar de forma única cada linha em uma tabela.
5. **Errado**: Relacionamentos muitos-para-muitos requerem uma tabela intermediária para implementar o relacionamento entre duas tabelas.
