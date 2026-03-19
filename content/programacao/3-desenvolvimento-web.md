---
title: "3. Desenvolvimento Web"
date: 2026-03-19T00:02:19.408Z
---

# 3. Desenvolvimento Web

## 1. Definição e Funcionamento

Desenvolvimento Web refere-se à criação, construção e manutenção de websites e aplicações web. Funciona através de tecnologias como HTML5, CSS, JavaScript, XML e JSON, que são utilizadas para estruturar, estilizar, programar comportamentos e facilitar a troca de dados, respectivamente. É aplicado em sites institucionais, e-commerces, blogs, portais, sistemas web e aplicações interativas.

## 2. Pontos Críticos de Prova

- **HTML5**: Última versão do HTML, introduz novas tags semânticas (`<article>`, `<footer>`, `<header>`, `<nav>`, `<section>`) e elementos de formulário (`<date>`, `<time>`, `<email>`).
- **CSS**: Usado para estilizar elementos HTML. CSS3, a última versão, inclui recursos como animações, transições, e layouts flexíveis (`flexbox`) e de grade (`grid`).
- **JavaScript**: Linguagem de programação que permite adicionar interatividade aos websites. Suporta programação orientada a objetos, funções e eventos.
- **XML vs. JSON**: XML é uma linguagem de marcação para armazenar e transportar dados, enquanto JSON é um formato leve de troca de dados, fácil de ler e escrever. JSON é geralmente preferido para APIs web devido à sua simplicidade e eficiência com JavaScript.

## 3. Pegadinhas Comuns

- Confundir **HTML** como linguagem de programação (é uma linguagem de marcação).
- Acreditar que **CSS** é incapaz de criar animações complexas.
- Pensar que **JavaScript** só pode ser executado no navegador (Node.js permite sua execução no servidor).
- Misturar **XML** com **JSON**, achando que ambos são usados para os mesmos propósitos com a mesma eficiência em todas as situações.
- Afirmar que elementos semânticos do **HTML5** são apenas para melhorar a aparência visual.

## 4. Aplicação Prática

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo HTML5</title>
</head>
<body>
    <header> <!-- Cabeçalho do site -->
        <h1>Meu Blog</h1>
    </header>
    <nav> <!-- Navegação -->
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Artigos</a></li>
        </ul>
    </nav>
    <article> <!-- Conteúdo principal -->
        <h2>Título do Artigo</h2>
        <p>Este é um exemplo de artigo.</p>
    </article>
    <footer> <!-- Rodapé -->
        <p>&copy; 2023 Meu Blog</p>
    </footer>
</body>
</html>
```

## 5. Tabela Resumo

| Conceito | Definição | Pegadinha |
|----------|-----------|-----------|
| HTML5 | Última versão do HTML, com novas tags semânticas e de formulário. | Não é uma linguagem de programação. |
| CSS | Usado para estilizar e layout de páginas web. | Pode criar animações complexas. |
| JavaScript | Linguagem de programação para adicionar interatividade. | Pode ser executado fora do navegador. |
| XML | Linguagem de marcação para armazenar e transportar dados. | Não é tão eficiente quanto JSON para APIs web. |
| JSON | Formato leve de troca de dados. | Preferido para APIs web devido à sua simplicidade com JavaScript. |

## 6. Simulado (Certo ou Errado)

1. HTML5 introduziu a capacidade de armazenar dados localmente no navegador do cliente, mesmo que a conexão com a internet seja perdida. (Certo)
2. CSS3 é incapaz de criar animações, sendo necessário o uso de JavaScript para tal fim. (Errado)
3. JSON e XML são intercambiáveis e oferecem a mesma eficiência em todas as aplicações web. (Errado)
4. JavaScript é uma linguagem de programação que pode ser executada tanto no cliente quanto no servidor. (Certo)
5. As tags `<div>` e `<span>` do HTML5 são exemplos de elementos semânticos introduzidos para melhorar a acessibilidade. (Errado)

### Gabarito comentado:

1. **Certo**: HTML5 introduziu recursos como o localStorage e sessionStorage para armazenamento local.
2. **Errado**: CSS3 possui recursos robustos para criar animações sem a necessidade de JavaScript.
3. **Errado**: JSON é geralmente mais eficiente e mais fácil de usar com JavaScript do que XML, especialmente para APIs web.
4. **Certo**: JavaScript pode ser executado no lado do cliente (navegador) e no servidor (com o uso de ambientes como Node.js).
5. **Errado**: `<div>` e `<span>` não são elementos semânticos; eles são usados para agrupamento e estilização sem adicionar significado ao conteúdo.
