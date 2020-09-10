## Histórico de Versões

| Data       | Versão | Descrição            |         Autor             |
|:----------:|:------:|:--------------------:|:-------------------------:|
| 09/09/2020 | 0.1 | Criação do Documento com tema, épico, funcionalidades e user story  | @GeiseSaunier |
|  | 0.2 | Revisão dos termos utilizados  | |
|  | 0.3 | Generalização de termos  |  |
|  | 0.4 | Adicionando novas Features e User Storys  |  |

# Versão 1

## Tema
| ID | DESCRIÇÃO |
|----|-----------|
|TM01| Ziguen|

## Épicos
| ID | DESCRIÇÃO | ID RELACIONADO (TEMA) |
|----|-----------|----------------|
| EP01 | Como um usuário cliente, eu desejo acessar e utilizar a plataforma Ziguen | TM01 |
| EP02 | Como um usuário cliente, eu desejo me cadastrar na plataforma Ziguen | TM01 |
| EP03 | Como um usuário cliente, eu desejo fazer alterações em meu perfil de cadastro | TM01 |
| EP04 | Como um usuário cliente, eu desejo efetuar compras na plataforma | TM01 |
| EP05 | Como um usuário cliente, eu desejo ter ajuda no uso do sistema | TM01 |
| EP06 | Como um usuário cliente, eu desejo realizar um pagamento através de cartão de crédito, débito ou boleto | TM01 |
| EP07 | Como um usuário cliente, eu desejo visualizar as viagens programadas | TM01 |
| EP08 | Como um usuário cliente, eu desejo receber um comprovante da compra realizada | TM01 |
| EP09 | Como um usuário administrador, eu desejo cadastrar uma embarcação no sistema | TM01 |

## Funcionalidades (Features)
| ID | DESCRIÇÃO | ID RELACIONADO (ÉPICOS) |
|----|-----------|----------------|
| FT01 | Cadastrar usuário cliente | EP02 |
| FT02 | Cadastrar embarcação | EP09 |
| FT03 | Alterar dados do usuário cliente | EP03, EP01 |
| FT04 | Alterar dados da embarcação | EP09 |
| FT05 | Excluir dados do usuário cliente | EP03, EP01 |
| FT06 | Excluir dados da embarcação | EP09 |
| FT07 | Consultar viagens programadas | EP07 |
| FT08 | Gerar PDF com a confirmação da compra | EP08 |

## User Story

|    ID   |      Tipo     |     Eu como    |      Desejo       | De modo que | Prioridade | Status    | ID RELACIONADO (FEATURES) |
|:-------:|:-------------:|:--------------:|:-----------------:|:-----------:|:----------:|:---------:|:-------------------------------:|
|    US01    |   Funcional   | Usuário cliente       | realizar um cadastro na plataforma Ziguen | eu consiga realizar a compra de passagens| Alta | To Do | FT01 |
|    US02    |   Funcional   | Usuário cliente       | logar e navegar na plataforma | eu consiga fazer aletrações e exclusões do meu cadastro | Alta | To Do | FT03 |
|    US03    |   Funcional   | Usuário cliente       | ao concluir a compra receber um retono | eu consiga gerar um PDF com a confirmação da compra | Alta | To Do | FT03 |
|    US04    |   Funcional   | Usuário administrador       |  cadastrar uma embarcação |   seja possível obter todos os dados para efetivação do cadastro   | Alta | To Do | FT02 |
|    US05   |   Funcional   | Usuário administrador      | ter permissão para acesso aos dados da embarcação | seja possível alterar e excluir o cadastro | Alta | To Do | FT01 |


