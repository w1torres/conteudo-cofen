---
title: "2. Python"
date: 2026-03-19T00:01:51.702Z
---

# 2. Python

## 1. Definição e Funcionamento

Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi criada por Guido van Rossum em 1991. É amplamente utilizada para desenvolvimento web, automação, análise de dados, ciência de dados, e desenvolvimento de software em geral, devido à sua sintaxe clara e legibilidade.

## 2. Pontos Críticos de Prova

- **Regras importantes**: Python utiliza indentação para definir blocos de código, ao contrário de outras linguagens que usam chaves `{}`.
- **Classificações**: Python é tanto uma linguagem compilada quanto interpretada. O código Python é primeiro compilado para bytecode e então executado por um interpretador.
- **Exceções**: Python não suporta sobrecarga de métodos diretamente, mas pode ser implementada de maneira indireta.

## 3. Pegadinhas Comuns

- **Confusões frequentes**: Confundir tipagem dinâmica com tipagem fraca. Python tem tipagem dinâmica e forte.
- **Termos que mudam o sentido**: Acreditar que "Python é somente interpretado" é uma pegadinha, pois também envolve um processo de compilação para bytecode.
- **Diferenças entre conceitos próximos**: Confundir listas com tuplas. Listas são mutáveis e tuplas são imutáveis.

## 4. Aplicação Prática

```python
# Exemplo simples: Cálculo da média de números em uma lista
numeros = [10, 20, 30, 40]
media = sum(numeros) / len(numeros)
print(f"A média é: {media}")
```

**Situação real**: Automatizar a geração de relatórios de vendas mensais, coletando dados de vendas de um banco de dados, calculando totais e médias, e gerando um arquivo de relatório.

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| Tipagem | Dinâmica e forte | Confundir com tipagem fraca |
| Blocos de código | Definidos por indentação | Achar que usa chaves `{}` |
| Execução | Compilado para bytecode e interpretado | Dizer que é somente interpretado |

## 6. Simulado (Certo ou Errado)

1. Python suporta sobrecarga de operadores de forma nativa. (Errado)
2. A tipagem em Python é dinâmica e fraca. (Errado)
3. Listas em Python são mutáveis, enquanto tuplas são imutáveis. (Certo)
4. Python é exclusivamente uma linguagem interpretada. (Errado)
5. A indentação em Python é opcional para a definição de blocos de código. (Errado)

**Gabarito comentado:**

1. **Errado**: Python suporta sobrecarga de operadores, mas não de forma nativa para métodos. É necessário implementar métodos especiais.
2. **Errado**: Python tem tipagem dinâmica e forte, não fraca. Isso significa que o tipo de uma variável é determinado em tempo de execução, e Python não permite operações entre tipos incompatíveis sem uma conversão explícita.
3. **Certo**: Este é um conceito fundamental de Python, onde listas são estruturas de dados que podem ser alteradas, e tuplas são versões imutáveis das listas.
4. **Errado**: Python compila o código para bytecode antes de ser interpretado pela máquina virtual Python (CPython), portanto não é exclusivamente interpretado.
5. **Errado**: A indentação é obrigatória em Python e é usada para definir blocos de código. Ignorar a indentação leva a `IndentationError`.
