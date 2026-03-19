---
title: "1. Modelo entidade-relacionamento"
date: 2026-03-19T00:13:18.399Z
---

# 1. Modelo entidade-relacionamento

## 1. Definição e Funcionamento

O Modelo Entidade-Relacionamento (MER) é uma ferramenta de modelagem de dados que permite representar entidades, seus atributos e relacionamentos de forma gráfica, facilitando a compreensão e o desenvolvimento de bancos de dados. Funciona como uma etapa preliminar à criação física do banco, servindo de esquema para a estruturação e organização dos dados. É amplamente aplicado no design de sistemas de informação e na modelagem de bases de dados relacionais.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Entidades são representadas por retângulos, relacionamentos por losangos e atributos por óvalos. Cada entidade deve ter um atributo-chave que a identifica unicamente.
- **Classificações**: Entidades podem ser classificadas como fortes ou fracas (dependentes de outra entidade para sua identificação). Relacionamentos podem ser de cardinalidade um-para-um, um-para-muitos ou muitos-para-muitos.
- **Exceções**: Atributos multivalorados (que podem conter múltiplos valores para uma mesma entidade) e atributos compostos (que podem ser divididos em outros atributos menores) são exceções à regra de simplicidade de atributos.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir entidades com atributos ou vice-versa. Acreditar que todos os atributos são simples e não podem ser divididos.
- **Termos que mudam o sentido**: Afirmar que uma entidade **sempre** deve ter um relacionamento com outra entidade é incorreto. Nem todas as entidades estão relacionadas diretamente.
- **Diferenças entre conceitos próximos**: Diferenciar claramente entre entidades fortes e fracas. Entidades fracas não possuem atributos-chave próprios e dependem de uma entidade forte para sua existência.

## 4. Aplicação Prática

Considerando um sistema de biblioteca, temos:

- Entidades: Livro, Autor, Leitor
- Relacionamentos: Escrito por (Livro <-> Autor), Emprestado a (Livro <-> Leitor)

```sql
-- Exemplo de comando SQL para criar tabelas baseadas no MER acima
CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(100)
);

CREATE TABLE Livro (
    LivroID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

CREATE TABLE Leitor (
    LeitorID INT PRIMARY KEY,
    Nome VARCHAR(100)
);

CREATE TABLE Emprestimo (
    LivroID INT,
    LeitorID INT,
    DataEmprestimo DATE,
    FOREIGN KEY (LivroID) REFERENCES Livro(LivroID),
    FOREIGN KEY (LeitorID) REFERENCES Leitor(LeitorID)
);
```

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Entidade | Objeto com existência independente | Confundir com atributo |
| Atributo | Propriedade ou característica de uma entidade | Acreditar que não podem ser compostos ou multivalorados |
| Relacionamento | Associação entre duas ou mais entidades | Pensar que todas as entidades devem estar relacionadas |

## 6. Simulado (Certo ou Errado)

1. Todos os atributos em um modelo entidade-relacionamento devem ser simples e atômicos. (Errado)
2. Uma entidade fraca é sempre identificada por um atributo-chave próprio. (Errado)
3. Relacionamentos muitos-para-muitos podem ser diretamente representados no MER, mas requerem uma tabela associativa na implementação física. (Certo)
4. Atributos compostos podem ser divididos em subatributos menores para uma representação mais detalhada. (Certo)
5. Cada entidade no MER deve estar relacionada com pelo menos outra entidade. (Errado)

### Gabarito comentado:

1. **Errado**: Afirmar que todos os atributos devem ser simples ignora a existência de atributos compostos e multivalorados.
2. **Errado**: Entidades fracas não possuem atributos-chave próprios; elas dependem de uma chave parcial que é complementada pela chave de sua entidade forte associada.
3. **Certo**: Embora o MER permita a representação de relacionamentos muitos-para-muitos, na prática, esses relacionamentos exigem uma tabela associativa para sua implementação em um banco de dados relacional.
4. **Certo**: Atributos compostos são aqueles que podem ser divididos em partes menores, o que permite uma modelagem mais precisa e detalhada.
5. **Errado**: Nem todas as entidades precisam estar diretamente relacionadas umas com as outras; algumas podem existir independentemente dentro do modelo.
