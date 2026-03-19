---
title: "2. UML"
date: 2026-03-19T00:03:36.124Z
---

# 2. UML

## 1. Definição e Funcionamento

A Linguagem de Modelagem Unificada (UML) é uma linguagem padrão para especificar, visualizar, construir e documentar os artefatos de sistemas de software. UML oferece um conjunto padrão de diagramas e notações para modelar sistemas de forma abstrata. É amplamente aplicada na engenharia de software para modelar a estrutura e o comportamento dos sistemas de software.

## 2. Pontos Críticos de Prova

- **Regras importantes**: UML é composta por vários tipos de diagramas, cada um servindo a propósitos diferentes. Os mais comuns em provas são diagramas de classes, de interação, de estados e de atividades.
- **Classificações**: 
  - Diagramas de classes representam as classes e relações entre elas.
  - Diagramas de interação (sequência e colaboração) mostram como os objetos interagem.
  - Diagramas de estados descrevem os estados de um objeto e suas transições.
  - Diagramas de atividades focam no fluxo de controle ou fluxo de dados.
- **Exceções**: Nem todos os diagramas são utilizados para todos os tipos de modelagem. Por exemplo, diagramas de atividades são mais usados para modelar processos de negócios do que a estrutura interna de um software.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Misturar diagramas de estados com diagramas de atividades, pois ambos podem parecer visualmente similares, mas têm propósitos distintos.
- **Termos que mudam o sentido**: Afirmar que UML "somente" é usada para modelar sistemas orientados a objetos. Embora seja comumente usada nesse contexto, UML também pode ser aplicada a outros paradigmas.
- **Diferenças entre conceitos próximos**: Confundir diagramas de sequência (um tipo de diagrama de interação) com diagramas de colaboração, já que ambos detalham interações mas com focos diferentes: sequência em ordem temporal e colaboração em organização estrutural.

## 4. Aplicação Prática

Considerando um diagrama de classes simples:

```plaintext
Classe Pessoa {
  - nome: String
  - idade: Int
  + falar(): Void
}
```

Este exemplo representa uma classe `Pessoa` com dois atributos (`nome` e `idade`) e um método (`falar()`). O sinal `-` indica visibilidade privada, e o sinal `+`, pública.

## 5. Tabela Resumo

| Conceito            | Definição                                                                 | Pegadinha                     |
|---------------------|---------------------------------------------------------------------------|-------------------------------|
| Diagramas de Classes| Representam classes e suas relações                                       | Confundir com diagrama de objetos |
| Diagramas de Interação | Mostram como objetos interagem através de mensagens                     | Misturar sequência e colaboração |
| Diagramas de Estados | Descrevem estados de um objeto e transições                               | Confundir com diagrama de atividades |
| Diagramas de Atividades | Focam no fluxo de controle ou dados                                      | Usar para modelar estrutura interna |

## 6. Simulado (Certo ou Errado)

1. UML é exclusivamente usada para modelar sistemas orientados a objetos. (Errado)
2. Diagramas de sequência e de colaboração são ambos tipos de diagramas de interação. (Certo)
3. Diagramas de atividades são ideais para modelar a estrutura interna de um software. (Errado)
4. Em um diagrama de classes, atributos privados são marcados com o sinal “+”. (Errado)
5. Diagramas de estados e de atividades podem ser usados de forma intercambiável. (Errado)

**Gabarito comentado:**

1. **Errado**. UML pode ser aplicada em diversos paradigmas de programação, não se limitando a orientação a objetos.
2. **Certo**. Ambos são utilizados para modelar como objetos interagem entre si, diferenciando-se pelo foco em ordem temporal ou organização estrutural.
3. **Errado**. Diagramas de atividades são mais adequados para modelar o fluxo de controle ou de dados, não a estrutura interna.
4. **Errado**. Atributos privados são marcados com o sinal “-”, enquanto “+” indica visibilidade pública.
5. **Errado**. Apesar de visualmente similares, diagramas de estados focam nos estados de um objeto e suas transições, enquanto diagramas de atividades modelam o fluxo de controle ou dados.
