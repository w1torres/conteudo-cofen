---
title: "2. Modelo Entidade-Relacionamento"
date: 2026-03-18T23:57:41.086Z
---

# 2. Modelo Entidade-Relacionamento

## 1. Definição e Funcionamento

O Modelo Entidade-Relacionamento (MER) é uma ferramenta de modelagem de dados que permite a representação conceitual e abstrata dos dados de um sistema. Ele funciona através da identificação de entidades, atributos e relacionamentos, facilitando a organização e o entendimento das informações. É amplamente aplicado no design de bancos de dados relacionais.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Cada entidade deve ter um atributo chave que a identifique unicamente. Relacionamentos podem ser classificados em 1:1, 1:N, N:1 ou N:N.
- **Classificações**: Entidades podem ser classificadas como fortes ou fracas, sendo que entidades fracas dependem de uma entidade forte para sua existência.
- **Exceções**: Atributos multivalorados e compostos devem ser tratados com atenção, pois não se enquadram diretamente na estrutura básica do MER.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir entidades com atributos ou vice-versa. Acreditar que todos os relacionamentos são bidirecionais.
- **Termos que mudam o sentido**: A utilização de termos absolutos como “sempre” e “somente” pode levar a erros de interpretação, especialmente em relação à aplicabilidade de regras.
- **Diferenças entre conceitos próximos**: Diferenciar entre atributos simples e compostos, assim como entre entidades fortes e fracas.

## 4. Aplicação Prática

Exemplo simples: Considere um sistema de biblioteca. Uma entidade pode ser `Livro` com atributos como `ISBN`, `Título` e `Autor`. Um relacionamento pode ser `empresta` entre as entidades `Livro` e `Usuário`.

```sql
-- Exemplo de comando para criar tabelas baseadas no MER acima
CREATE TABLE Livro (
    ISBN CHAR(13) NOT NULL,
    Titulo VARCHAR(100) NOT NULL,
    Autor VARCHAR(100),
    PRIMARY KEY (ISBN)
);

CREATE TABLE Usuario (
    UsuarioID INT NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    PRIMARY KEY (UsuarioID)
);

CREATE TABLE Empresta (
    UsuarioID INT,
    ISBN CHAR(13),
    DataEmprestimo DATE NOT NULL,
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID),
    FOREIGN KEY (ISBN) REFERENCES Livro(ISBN)
);
```

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Entidade | Objeto ou conceito que possui dados armazenados sobre ele. | Confundir com atributo. |
| Atributo | Propriedade ou característica de uma entidade. | Confundir com entidade. |
| Relacionamento | Associação entre duas ou mais entidades. | Acreditar que é sempre bidirecional. |

## 6. Simulado (Certo ou Errado)

1. Uma entidade forte pode existir sem uma entidade fraca. (Certo)
2. Atributos multivalorados podem ser diretamente representados no MER sem necessidade de adaptação. (Errado)
3. Todos os relacionamentos no MER são de natureza N:N. (Errado)
4. Uma chave primária é necessária para identificar unicamente cada registro em uma entidade. (Certo)
5. Atributos compostos são aqueles que podem ser divididos em subpartes menores que representam informações independentes. (Certo)

### Gabarito comentado:

1. **Certo**: Entidades fortes não dependem de outras para existir, enquanto entidades fracas dependem de uma entidade forte.
2. **Errado**: Atributos multivalorados requerem uma abordagem especial no MER, como a criação de entidades relacionadas para representá-los adequadamente.
3. **Errado**: Relacionamentos podem ser 1:1, 1:N, N:1, ou N:N. A natureza do relacionamento depende do contexto específico das entidades envolvidas.
4. **Certo**: A chave primária é essencial para garantir a unicidade de cada registro dentro de uma entidade, permitindo sua identificação precisa.
5. **Certo**: Atributos compostos são aqueles que podem ser decompostos em partes menores, cada uma com significado próprio, facilitando a organização dos dados.
