---
title: "1. Conceitos básicos de segurança da informação"
date: 2026-03-18T23:53:51.598Z
---

# 1. Conceitos básicos de segurança da informação

## 1. Definição e Funcionamento

A segurança da informação é a prática de proteger informações de acessos não autorizados, uso indevido, divulgação, interrupção, modificação, inspeção, gravação ou destruição. Ela se baseia em princípios fundamentais: confidencialidade, integridade e disponibilidade, conhecidos pela sigla "CIA".

## 2. Pontos Críticos de Prova

- **Confidencialidade**: Garantir que a informação é acessível somente por pessoas autorizadas. Exemplo: criptografia.
- **Integridade**: Assegurar que a informação é precisa e completa, e que não foi alterada indevidamente. Exemplo: checksums e assinaturas digitais.
- **Disponibilidade**: A informação deve estar acessível e utilizável sob demanda por um usuário autorizado. Exemplo: redundância de sistemas.

## 3. Pegadinhas Comuns

- Confundir **integridade** com **confidencialidade**. A primeira refere-se à precisão dos dados, enquanto a segunda ao acesso restrito.
- Acreditar que a **criptografia** garante a integrididade. Por si só, a criptografia foca em confidencialidade, embora algumas implementações possam também assegurar integridade.
- Pensar que **disponibilidade** significa apenas ter backups. Na verdade, envolve também redundância de sistemas, balanceamento de carga, etc.

## 4. Aplicação Prática

Um exemplo prático de garantia de integridade é o uso de um checksum MD5 para verificar se um arquivo foi alterado durante a transferência.

```bash
echo "texto original" | md5sum
```

Se o checksum do arquivo no destino for diferente do checksum calculado na origem, sabe-se que o arquivo foi alterado.

## 5. Tabela Resumo

| Conceito        | Definição                                                                 | Pegadinha                      |
|-----------------|---------------------------------------------------------------------------|--------------------------------|
| Confidencialidade | Acesso restrito à informação somente por pessoas autorizadas.             | Confundir com integridade.     |
| Integridade     | Precisão e completude da informação, sem alterações indevidas.            | Acreditar que criptografia garante. |
| Disponibilidade | Informação acessível e utilizável sob demanda por um usuário autorizado.  | Pensar que se resume a backups.|

## 6. Simulado (Certo ou Errado)

1. A criptografia assegura tanto a confidencialidade quanto a integridade da informação. (ERRADO)
2. A disponibilidade está relacionada apenas com a existência de backups dos dados. (ERRADO)
3. A integridade da informação pode ser garantida por meio de assinaturas digitais. (CERTO)
4. A confidencialidade é obtida exclusivamente através de medidas físicas de segurança. (ERRADO)
5. Redundância de sistemas é uma estratégia para garantir a disponibilidade da informação. (CERTO)

### Gabarito comentado:

1. **Errado**. A criptografia foca primariamente em confidencialidade. Algumas implementações podem assegurar integrididade, mas não é uma regra geral.
2. **Errado**. A disponibilidade envolve muito mais do que backups, incluindo redundância de sistemas, balanceamento de carga, entre outros.
3. **Certo**. Assinaturas digitais são uma forma eficaz de garantir a integridade da informação, assegurando que os dados não foram alterados.
4. **Errado**. A confidencialidade pode ser obtida por meio de medidas físicas e lógicas, incluindo criptografia, controle de acesso, entre outros.
5. **Certo**. A redundância de sistemas é uma estratégia chave para garantir que a informação esteja disponível mesmo em caso de falha de um componente.
