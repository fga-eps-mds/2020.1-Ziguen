## Histórico de Versões

| Data       | Versão | Descrição            |         Autor             |
|:----------:|:------:|:--------------------:|:-------------------------:|
| 09/09/2020 | 0.1 | Criação do Documento com tema, épico, funcionalidades e user story  | @GeiseSaunier |
|  | 0.2 | Revisão dos termos utilizados  | |
|  | 0.3 | Generalização de termos  |  |
|  | 0.4 | Adicionando novas Features e User Storys  |  |
| 03/10/20 | 0.5 | Ajustes na ortografia  | Edson e Geise |
| 25/10/20 | 0.6 | Restruturar backlog | Edson e Francisco |
| 25/10/20 | 0.7 | Terminando a restruturar backlog | Edson e Francisco |


# Versão 1

## Tema
| ID | DESCRIÇÃO |
|----|-----------|
|TM01| Administrador|
|TM02| Passageiro|
|TM03| Proprietário|


## Épicos
| ID | DESCRIÇÃO | ID RELACIONADO (TEMA) |
|----|-----------|----------------|
| EP01 | Como um usuário administrador, eu desejo gerenciar todo sistema ziguen | TM01 |
| EP02 | Como um usuário passageiro, eu desejo realizar compra de passagem de barco | TM02 |

## Funcionalidades (Features)
| ID | DESCRIÇÃO | ID RELACIONADO (ÉPICOS) |
|----|-----------|----------------|
| FT01 | CRUD do usuário administrador | EP01 |
| FT02 | Gestão do usuário proprietário | EP01 |
| FT03 | Gerenciamento da embarcação | EP01 |
| FT04 | Administrar viagens | EP01 |
| FT05 | Vendas de passagem | EP01 |
| FT06 | CRUD do usuário passageiro | EP02 |
| FT07 | Compra de passagem | EP02 |


## User Story

|    ID   |      Tipo     |     Eu como    |      Desejo       | De modo que | Prioridade | Status    | ID RELACIONADO (FEATURES) |
|:-------:|:-------------:|:--------------:|:-----------------:|:-----------:|:----------:|:---------:|:-------------------------------:|
|    US01    |   Funcional   | Usuário administrador       | realizar meu cadastro na plataforma Ziguen | eu consiga cadastrar um novo administrador| Alta | Desenvolvimento | FT01 |
|    US01    |   Funcional   | Usuário administrador       | gerir dados do usuário proprietário | eu consiga cadastrar, visualizar, editar e excluir o usuário| Alta | Desenvolvimento | FT02 |
|    US01    |   Funcional   | Usuário administrador       | administrar a embacarção | eu consiga registrar e relacionar com a FT02 | Alta | Desenvolvimento | FT03 |
|    US01    |   Funcional   | Usuário administrador       | fazer a gestão de viagem | eu consiga gerenciar rotas de viagens  | Alta | Desenvolvimento | FT04 |
|    US01    |   Funcional   | Usuário administrador       | realizar venda de passagens | eu consiga criar e alterar dados da passagem  | Alta | Desenvolvimento | FT05 |
|    US02    |   Funcional   | Usuário passageiro   | fazer cadastro | eu consiga cadastrar e logar no sistema | Alta | Desenvolvimento | FT06 |
|    US02    |   Funcional   | Usuário passageiro   | realizar compra de passagem | eu consiga logar e comprar as passagem | Alta | Desenvolvimento | FT07 |
