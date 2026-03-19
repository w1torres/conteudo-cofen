---
title: "3. Projeto de Software"
date: 2026-03-19T00:04:00.303Z
---

# 3. Projeto de Software

## 1. Definição e Funcionamento

O projeto de software é uma fase do desenvolvimento de software que segue a especificação de requisitos e precede a codificação. Ele envolve a criação de uma arquitetura de software, a definição de estruturas de dados e a modularidade do sistema, visando atender aos requisitos funcionais e não funcionais especificados.

## 2. Pontos Críticos de Prova

- **Arquitetura de Software**: É o plano estrutural que define a organização do sistema, incluindo seus componentes, as relações entre eles e com o ambiente, e os princípios que orientam seu design e evolução.
- **Estrutura de Dados**: Refere-se à organização, gerenciamento e armazenamento de dados de forma que possamos realizar operações eficientes sobre eles.
- **Modularidade**: É o grau em que um sistema ou projeto de software pode ser dividido em módulos menores, permitindo reuso, manutenção facilitada e compreensão do sistema.

## 3. Pegadinhas Comuns

- Confundir **arquitetura de software** com **design de software**; a arquitetura foca na estrutura de alto nível, enquanto o design detalha mais profundamente cada componente.
- Acreditar que **estruturas de dados** se aplicam apenas a tipos de dados complexos; estruturas simples também são fundamentais.
- Pensar que **modularidade** implica em menor desempenho; na verdade, um design modular bem feito pode facilitar a otimização.

## 4. Aplicação Prática

```java
// Exemplo de modularidade em Java
public class Calculadora {
    public int soma(int a, int b) {
        return a + b;
    }

    public int subtrai(int a, int b) {
        return a - b;
    }
}
```
Este exemplo ilustra a modularidade, dividindo as funcionalidades de uma calculadora em métodos distintos.

## 5. Tabela Resumo

| Conceito             | Definição                                                                                   | Pegadinha                       |
|----------------------|---------------------------------------------------------------------------------------------|---------------------------------|
| Arquitetura de Software | Plano estrutural para organização do sistema.                                               | Confundir com design de software.|
| Estrutura de Dados     | Organização de dados para operações eficientes.                                             | Aplicável apenas a dados complexos.|
| Modularidade          | Divisão do sistema em módulos menores.                                                      | Implica em menor desempenho.    |

## 6. Simulado (Certo ou Errado)

1. A arquitetura de software é responsável apenas pela organização física dos componentes do sistema. (Errado)
2. Estruturas de dados são essenciais apenas para a manipulação de grandes volumes de dados. (Errado)
3. A modularidade facilita a manutenção e o entendimento do código, mas pode reduzir o desempenho. (Errado)
4. Design de software e arquitetura de software são termos intercambiáveis. (Errado)
5. A modularidade permite que diferentes partes do software sejam desenvolvidas e testadas independentemente. (Certo)

Gabarito comentado:

1. Errado. A arquitetura de software abrange tanto a organização lógica quanto física dos componentes do sistema, além de suas interações.
2. Errado. Estruturas de dados são fundamentais para qualquer tipo de manipulação de dados, independentemente do volume.
3. Errado. Embora a modularidade exija atenção no design para evitar impactos no desempenho, ela não implica necessariamente em redução deste.
4. Errado. Design de software detalha o funcionamento interno dos componentes, enquanto a arquitetura foca na estrutura geral e relações entre componentes.
5. Certo. A modularidade permite desenvolvimento, teste e manutenção independentes para diferentes partes do software, facilitando o gerenciamento do projeto.
