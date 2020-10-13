
## Histórico de Versões

| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
| 0.1 | 05/09/2020  | Francisco   | Estrutura inicial  |
| 0.2 | 06/09/2020  | Liverson e Francisco  | Implementação da representação de arquitetura |
| 0.3 | 06/09/2020  | Liverson e Francisco  | Implementação das metas e restrições da arquitetura|
| 0.4 | 06/09/2020  | Liverson e Francisco  | Implementação da Introdução do Documento de arquitetura|
| 0.5 | 10/09/2020  | Francisco e Edson  | Implementação do MER|
| 0.6 | 11/09/2020  | Francisco e Edson  | Criação do DER|
| 0.7 | 11/09/2020  | Liverson e Giulia  | Adição do diagrama de casos de uso|
| 0.8 | 13/09/2020  | Francisco e Edson  | Ajustes no MER|
| 0.9 | 13/09/2020  | Francisco e Edson  | Ajustes no DER|
| 1.0 | 22/09/2020  | Edson e Francisco  | Revisão do documento de arquitetura|
| 1.1 | 23/09/2020  | Edson e Francisco  | Diagrama de representação|
| 1.2 | 02/10/2020  | Edson e Geise  | Atualização do DER |
| 1.3 | 03/10/2020  | Edson e Geise  | Inclusão de tecnologias e alteração de tripulante para passageiro |
| 1.4 | 11/10/2020  | Liverson e Francisco  | Atualização na descrição da nossa arquitetura MVC |
| 1.5 | 11/10/2020  | Liverson e Francisco  | Adição dos tópicos 5.1 e 5.2 |
| 1.6 | 11/10/2020  | Liverson e Giulia  | Adição dos usuários dos casos de uso e trocando as descrições de casos de uso para 5.3 |


## Sumário
1- [Introdução](#1--introdução)
* [1.1 - Finalidade](#1.1---finalidade)
* [1.2 - Escopo](#1.2---escopo)
* [1.3 - Visão Geral](#1.3---Visão-Geral)
* [1.4 - Definições,-acrônomos-e-Abreviações](#1.4---Definições,-acrônomos-e-Abreviações)

2- [Representação de Arquitetura](##-2---Representação-de-Arquitetura
)

* [2.1 - Padrão Arquitetural](###2.1---Padrão-Arquitetural)
* [2.2 - Tecnologias](#2.2---Tecnologias)

3- [Metas e Restrições da Arquitetura](#3---Metas-e-Restrições-da-Arquitetura)

* [ 3.1- Metas da Ziguen](#3.1--Metas-da-Ziguen)
* [3.2- Restrições da Arquitetura](#3.2--Restrições-da-Arquitetura)


4- [Visão de Dados](#4---Visão-de-Dados)
* [4.1 - MER](#4.1---MER)
  * [4.1.1 -Entidades](#4.1.1--Entidades)
  * [4.1.2 Relacionamento](4.1.2-Relacionamento)

* [4.2 DER
](#4.2-DER
)


5- [Visão de Caso de Uso](#5---Visão-de-Caso-de-Uso)
* [5.1 - Diagrama de Caso de uso](#5.1---Diagrama-de-Caso-de-uso)
* [5.2- Atores de Caso de Uso](#5.2---Atores-de-Caso-de-Uso)
* [5.3- Descrições de Caso de Uso3](#5.3----Descrições-de-Caso-de-Uso)


7- [Referências Bibliográficas](#7---Referências-Bibliográficas)


## 1- Introdução

### 1.1 - Finalidade
O objetivo deste documento é apresentar a arquitetura do projeto Ziguen. Apresentando os principais aspectos do software como um todo, apresentando decisões arquiteturais para o projeto e por fim contém informações que serão utilizadas por desenvolvedores e gestores para compreender a arquitetura utilizada no desenvolvimento, fluxo de informações e as tecnologias envolvidas no projeto.

### 1.2 - Escopo
A ferramenta ZIGUEN tem o propósito de facilitar a integração entre usuários do transporte fluvial e aqueles que detém a propriedade sobre esses meios de transporte, para que assim, o processo de comprar passagens em embarcações seja mais rápido, cômodo, seguro, além de inovador e intuitivo. A ferramenta trata-se de uma aplicação mobile e plataforma web onde as pessoas poderão adquirir passagens sem sair de casa, podendo conferir disponibilidade, horários e formas de pagamento com alguns cliques.


### 1.3 - Visão Geral
O documento está segmento em Representação de Arquitetura, Metas e Restrições da Arquitetura, Visão de Casos de Uso, Visão Lógica e Visão de Dados.

### 1.4 - Definições, acrônomos e Abreviações

* API - Application Programming Interface: conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por demais aplicativos que desejam utilizar seu serviço
* Framework: Conjuntos de funções e componentes pré definidos.
* Promises: Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona.
* ORM: Mapeamento objeto-relacional é uma técnica de desenvolvimento utilizada para reduzir a impedância da programação orientada aos objetos utilizando bancos de dados relacionais

## 2 - Representação de Arquitetura

![Diagrama de representação](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/diagrama_representacao.png)

### 2.1 - Padrão Arquitetural	

O MVC é um padrão de arquitetura de software, separando sua aplicação em três camadas. Nesse projeto a camada de interação do usuário (view), é a que faz a exibição dos dados, sendo ela por meio do framework react.js e next.js; a camada de manipulação dos dados (model), responsável pela leitura e escrita dos dados no banco de dados, nesse caso postgres usando a ferramenta sequelize, e também suas validações e a camada de controle (controller), responsável por receber todas as requisições do usuário, controlando qual model usar e qual view será mostrado ao usuário. Essa divisão em camadas é realizada para facilitar a resolução de um problema maior.

* Model: Camada da arquitetura responsável pela lógica de négocio, manipulação e validação de dados na aplicação.
* View: Camada da arquitetura responsável pela exibição da interface com o usuário.
* Controller: Camada da arquitetura responsável pela validação das requisições dos usuário de acordo com as regras de autenticação e autorização da aplicação.

Back-end: Model e Controller
Front-end: View

### 2.2 - Tecnologias
|tecnologias | descrição |
| ------------------- | ------------------- |
|Bootstrap |  Framework para desenvolvimento em HTML, CSS e JS. |
| React |  Biblioteca em javascript com foco em criar inteface de usuário em páginas web. |
|Cascading Style Sheets (CSS) |  Alia-se no desenvolvimento do frontend junto com HTML e JS. |
|Docker |  Utilizado para configurar o ambiente de desenvolvimento. |
|Docker-compose |  Usado para orquestrar os containers do docker |
|Express.js | é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel |
|Git | Git é uma ferramenta de versionamento de arquivos de código livre |
|HTML |  Alia-se no desenvolvimento do frontend junto com CSS e JS |
|JavaScript |  Alia-se no desenvolvimento do frontend junto com HTML e CSS |
| Jest |  Estrutura de teste de JavaScript |
|Node.js | é uma plataforma para construir aplicações web escaláveis de alta performance usando JavaScript |
|Postgres | PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto |
|Travis-CI | é um serviço de integração contínua distribuído e disponível na nuvem, utilizado para criar e testar projetos de software hospedados no GitHub |
| Sequelize| ORM baseado em promises para Node.js, que suporta vários dialetos, entre eles PostgreSQL |


## 3 - Metas e Restrições da Arquitetura
### 3.1- Metas da Ziguen
* Facilitar a compra de passagens;
* Facilitar os transportes fluviais;
* Diminuir tempos de espera em filas para compra de passagens.

### 3.2- Restrições da Arquitetura
* Ter acesso à internet;
* Criar um cadastro ziguen;
* Ter um navegador de internet.

## 4 - Visão de Dados
### 4.1 - MER
#### 4.1.1 -Entidades

**USUARIO**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idUsuario | Chave primária obrigatória| String| Identificação do Usuário|
|nome| Obrigatório| String | Nome do usuário|
| email | Obrigatório | String | Email do usuário|
| cpf | Obrigatório | String | cpf do usuário|
|telefone |Obrigatório |String | Login do usuário|
|senha| Obrigatório |String | Senha do usuário |

**ADMINISTRADOR**
|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idAdm |Chave primária obrigatória | String | Identificação do Administrador|
|idUsuario| Chave estrangeira obrigatória | String | Identificação do usuário|
|idPassagem |Chave estrangeira obrigatória | String | Identificação do Proprietário|


**PASSAGEIRO**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idPassageiro |Chave primária obrigatória | String | Identificação do Passageiro|
|idUsuario| Chave estrangeira obrigatória | String | Identificação do usuário|

**PROPIETARIO**
|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idProprietario |Chave primária obrigatória | String | Identificação do Proprietário|
|idUsuario| Chave estrangeira obrigatória | String | Identificação do usuário|

**EMBARCACAO**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idEmbarcacao| Chave primária obrigatória| String | Idetificação da embarcação|
|idProprietario |Chave estrangeira obrigatória | String | Identificação do proprietário|
|nome | Obrigatório | String | Nome da embarcação|
|capacidade | Obrigatório | Integer | Capacidade da embarcação|



**VIAGEM**
|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idViagem|Chave primária obrigatória | String | Identificação da viagem|
|idEmbarcação| Chave estrangeira obrigatória| String | Idetificação da embarcação|
|origem | Obrigatório | String | Origem da viagem|
|destino |Obrigatório | String | Destino da viagem|
|data | Obrigatório | String | Data da viagem|
|horario | Obrigatório| String | Horário da viagem|


**PASSAGEM**
|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idPassagem |Chave primária obrigatória| String| Identificação da passagem|
|idViagem| Chave estrangeira obrigatória | String | Identificação da viagem|
|idPassageiro |Chave estrangeira obrigatória | String | Identificação do passageiro|
|preco| Obrigatória | String | Preço da passagem|


#### 4.1.2 Relacionamento

**VIAGEM** -- gera -- **PASSAGEM** Uma viagem gera varias passagens, e uma passagem é valida apena para uma viagem. (Cardinalidade 1:n)

**EMBARCACAO** -- realiza -- **VIAGEM** Uma embarcação pode realizar uma ou mais viagens e uam viagem pode ser realizadas por varias embarcações. (Cardinalidade n:m)

**ADMINISTRADOR** -- cadastra -- **EMBARCACAO** O administrador responsável por cadastrar varias embarcações e as embarcaçãoes são cadastradas por um administrador. (Cardinalidade 1:n)

**ADMINISTRADOR** -- cadastra -- **PROPRIETARIO** O administrador responsável por cadastrar varios proprietários de embarcaçãoes são cadastradas por um administrador. (Cardinalidade 1:n)

**Passageiro** -- compra -- **VIAGEM** Um passageiro compra uma única viagem, uma viagem poder ser vendida para varios Passageiro. (Cardinalidade 1:n)
 


### 4.2 DER

![DER 0.1](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/der.jpg)

## 5 - Visão de Caso de Uso

### 5.1 Diagrama de Caso de uso
![Diagrama de casos de uso 0.1](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/develop/docs/diagramas/Diagrama_Casos_de_Uso.png)

### 5.2 Atores de Caso de Uso

|Ator| Descrição |
|Usuário| São todos os que forem utilizar o site |
|Passageiro| É quem vai utilizar o site para compra de passagens|
|Administrador| É quem irá fazer a manutenção do site com as devidas mudanças caso necessário |
|Proprietário de embarcação| É quem vai utilizar o site para visualizar o desempenho de vendas  |

### 5.3 Descrições de Caso de Uso

|Casos de uso| Ator | Descrição|
|-----|-----|------|
| UC01 - Manter conta | Usuário | O usuário tem as opções de atualizar informações da conta assim como pode também apagá-la |
| UC02 - Pesquisar passagem | Passageiro | O passageiro pode pesquisar a passagem da viagem da qual planeja fazer |
| UC03 - Visualizar passagem | Passageiro | O passageiro pode visualizar a passagem que deseja comprar|
| UC04 - Visualizar quantidade de assentos disponíveis | Passageiro | O passageiro poderá ver os assentos que ainda estão disponíveis da viagem que pretende fazer|
| UC05 - Comprar passagem| Passageiro | O passageiro poderá comprar a passagem que deseja|
| UC06 - Visualizar passagem comprada| Passageiro | Depois de comprar a passagem o passageiro poderá visualizar novamente as passagens que comprou |
| UC07 - Entrar em contato com o administrador| Passageiro e proprietário | Aqui estes usuários podem entrar em contato com os administradores para poder sanar suas dúvidas e dar sugestões |
| UC08 - Visualizar embarcações dele cadastradas| Proprietário| O proprietário poderá ver quais embarcações estão linkadas ao seu nome |
| UC09 - Visualizar como estão as compras de passagens| Proprietário e administrador | Os usuários citados poderão ver como estão os andamentos de vendas de passagens |
| UC10 - Cadastro do dono de embarcação| Administrador | O administrador pode adicionar um novo proprietário de embarcação na plataforma |
| UC11 - Cadastro de embarcação| Administrador | O administrador pode adicionar uma nova embarcação de um proprietário na plataforma |
| UC12 - Cadastro de viagens referentes a cada embarcação| Administrador | Adicionar novas viagens que são feitas pelas embarcações correspondentes |
| UC13 - Alteração no cadastro de embarcação| Administrador | O administrador pode mudar informações que foram feitas no cadastro de uma embarcação |
| UC14 - Exclusão de embarcação| Administrador | Caso necessário o administrador pode excluir por completo uma embarcação |
| UC15 - Resolução de problemas de usuários clientes| Administrador | O administrador terá que ajudar clientes da aplicação em caso de necessidade |


## 6 - Referências Bibliográficas

[Artefato: Documento de Arquitetura de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_software_architecture_document_C367485C.html)



