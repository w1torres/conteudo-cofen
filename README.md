# 📚 Concurso Builder - Sistema de Estudo Automatizado

Este sistema utiliza Inteligência Artificial e Geradores de Site Estático (Hugo) para transformar editais de concursos públicos em plataformas de estudo completas.

## 🛠️ Como usar

1.  **Requisitos**: Node.js v20+ e Hugo instalado localmente.
2.  **Configuração**:
    *   `cp .env.example .env` e adicione sua `OPENAI_API_KEY`.
    *   Edite `edital/edital.json` com as disciplinas do seu concurso.
3.  **Instalação**:
    ```bash
    npm install
    ```
4.  **Geração de Conteúdo**:
    ```bash
    npm run generate
    ```
5.  **Preview Local**:
    ```bash
    hugo server
    ```

## 🤖 Funcionamento
O script Node.js lê o edital, consulta a API da OpenAI (ou Gemini) para gerar resumos técnicos baseados na bibliografia oficial e salva tudo em arquivos Markdown formatados para o Hugo.

## 🚀 Publicação
O projeto está configurado para o **GitHub Actions**. Ao dar push na branch `main`, o sistema:
1. Gera o conteúdo novo via IA.
2. Faz o build do site Hugo.
3. Publica automaticamente no GitHub Pages.

## ⚠️ Aviso Legal
O conteúdo gerado por IA deve ser revisado. A IA auxilia na síntese, mas a palavra final é sempre a lei seca e a doutrina oficial.