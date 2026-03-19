---
title: "3. Restrições de integridade"
date: 2026-03-18T23:58:05.156Z
---

# 3. Restrições de integridade

## 1. Definição e Funcionamento

- **Conceito direto**: Restrições de integridade são regras aplicadas em bancos de dados para garantir a precisão, a consistência e a validade dos dados armazenados.
- **Como funciona**: Funcionam através de declarações no esquema do banco de dados que definem as regras para que os dados inseridos ou alterados respeitem a estrutura e a lógica do domínio de aplicação.
- **Onde é aplicado**: São aplicadas em tabelas, colunas e relações entre tabelas, envolvendo chaves primárias, chaves estrangeiras, restrições de domínio (como tipos de dados e valores permitidos) e restrições de integridade referencial.

## 2. Pontos Críticos de Prova

- **Regras importantes**:
  - Chaves Primárias (PK) devem ser únicas e não nulas em qualquer tabela.
  - Chaves Estrangeiras (FK) vinculam-se às chaves primárias de outras tabelas, garantindo a integridade referencial.
  - Restrições de domínio validam tipos de dados e valores permitidos.
- **Classificações**:
  - Integridade de entidade: relacionada à unicidade e não nulidade das PKs.
  - Integridade referencial: relacionada às relações entre tabelas através das FKs.
- **Exceções**:
  - Chaves estrangeiras podem aceitar valores nulos, a menos que explicitamente definido o contrário.

## 3. Pegadinhas Comuns

- **Confusões frequentes**:
  - Confundir integridade de entidade com integridade referencial.
  - Acreditar que chaves estrangeiras não podem ser nulas.
- **Termos que mudam o sentido**:
  - "Sempre" e "somente" podem levar a interpretações erradas, especialmente em relação à aplicabilidade das restrições.
- **Diferenças entre conceitos próximos**:
  - Diferença entre chave primária e chave candidata: todas as chaves primárias são chaves candidatas, mas nem todas as chaves candidatas se tornam chaves primárias.

## 4. Aplicação Prática

```sql
CREATE TABLE Funcionario (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    DepartamentoID INT,
    FOREIGN KEY (DepartamentoID) REFERENCES Departamento(ID)
);
```

- **Situação real**: Garantir que cada funcionário esteja vinculado a um departamento existente no banco de dados, mantendo a integridade referencial.

## 5. Tabela Resumo

| Conceito            | Definição                                                                 | Pegadinha                          |
|---------------------|---------------------------------------------------------------------------|------------------------------------|
| Chave Primária      | Identificador único e não nulo para cada registro.                        | Confundir com chave candidata.     |
| Chave Estrangeira   | Estabelece uma ligação entre tabelas, referenciando uma chave primária.   | Acreditar que não pode ser nula.   |
| Integridade de Entidade | Garante unicidade e não nulidade das chaves primárias.                  | Confundir com integridade referencial. |
| Integridade Referencial | Mantém a consistência entre tabelas através de chaves estrangeiras.    | Confundir com integridade de entidade. |

## 6. Simulado (Certo ou Errado)

1. Toda chave estrangeira deve ser também uma chave primária em sua tabela. (Errado)
2. Uma restrição de domínio pode especificar um conjunto limitado de valores válidos para uma coluna. (Certo)
3. Chaves primárias podem conter valores nulos. (Errado)
4. É possível ter mais de uma chave primária em uma única tabela. (Errado)
5. Restrições de integridade referencial são aplicadas somente em chaves estrangeiras. (Certo)

**Gabarito comentado**:

1. **Errado**. Chaves estrangeiras referenciam chaves primárias de outras tabelas, mas não precisam ser chaves primárias em suas próprias tabelas.
2. **Certo**. Restrições de domínio definem os valores permitidos para uma coluna, como tipos de dados específicos ou intervalos de valores.
3. **Errado**. Chaves primárias devem ser sempre únicas e não podem ser nulas, garantindo a identificação inequívoca de cada registro.
4. **Errado**. Uma tabela pode ter apenas uma chave primária, mas esta pode ser composta por mais de uma coluna.
5. **Certo**. A integridade referencial é garantida através de restrições aplicadas às chaves estrangeiras, assegurando que os valores de uma coluna correspondam a valores existentes na tabela referenciada.
