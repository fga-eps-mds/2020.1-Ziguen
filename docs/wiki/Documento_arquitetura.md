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


## 1 - Introdução

### 1.1 - Finalidade
O objetivo deste documento é apresentar a arquitetura do projeto Ziguen. Apresentando os principais aspectos do software como um todo, apresentando decisões arquiteturais para o projeto e por fim contém informações que serão utilizadas por desenvolvedores e gestores para compreender a arquitetura utilizada no desenvolvimento, fluxo de informações e as tecnologias envolvidas no projeto.

### 1.2 - Escopo
A ferramenta ZIGUEN tem o propósito de facilitar a integração entre usuários do transporte fluvial e aqueles que detém a propriedade sobre esses meios de transporte, para que assim, o processo de comprar passagens em embarcações seja mais rápido, cômodo, seguro, além de inovador e intuitivo. A ferramenta trata-se de uma aplicação mobile e plataforma web onde as pessoas poderão adquirir passagens sem sair de casa, podendo conferir disponibilidade, horários e formas de pagamento com alguns cliques.


### 1.3 - Visão Geral
O documento está segmento em Representação de Arquitetura, Metas e Restrições da Arquitetura, Visão de Casos de Uso, Visão Lógica e Visão de Dados.

### 1.4 - Definições, acrônomos e Abreviações

* API - Application Programming Interface: conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por demais aplicativos que desejam utilizar seu serviço
* Framework: Conjuntos de funções e componentes pré definidos.

## 2 - Representação de Arquitetura
### 2.1 - Padrão Arquitetural	
Segundo Ramos (2015), o MVC é um padrão de arquitetura de software, separando sua aplicação em três camadas. A camada de interação do usuário (view), que faz a exibição dos dados, sendo ela por meio de um html ou xml; a camada de manipulação dos dados (model), responsável pela leitura e escrita dos dados, e também suas validações e a camada de controle (controller), responsável por receber todas as requisições do usuário, controlando qual model usar e qual view será mostrado ao usuário. Essa divisão em camadas é realizada para facilitar a resolução de um problema maior.

* Model: Camada da arquitetura responsável pela lógica de négocio, manipulação e validação de dados na aplicação.
* View: Camada da arquitetura responsável pela exibição da interface com o usuário.
* Controller: Camada da arquitetura responsável pela validação das requisições dos usuário de acordo com as regras de autenticação e autorização da aplicação.

### 2.2 - Tecnologias
|tecnologias | descrição |
| ------------------- | ------------------- |
|Bootstrap |  Framework para desenvolvimento em HTML, CSS e JS. |
|Cascading Style Sheets (CSS) |  Alia-se no desenvolvimento do frontend junto com HTML e JS. |
|Docker |  Utilizado para configurar o ambiente de desenvolvimento. |
|Express.js | é um framework para aplicativo da web do Node. js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel |
|Git | Git é uma ferramenta de versionamento de arquivos de código livre |
|HTML |  Alia-se no desenvolvimento do frontend junto com CSS e JS |
|JavaScript |  Alia-se no desenvolvimento do frontend junto com HTML e CSS |
|JUnit |  é um framework open-source que dá suporte à criação de teste automatizados |
|Node.js | é uma plataforma para construir aplicações web escaláveis de alta performance usando JavaScript |
|Python | é uma linguagem de programação cujo objetivo é produtividade e legibilidade |
|Sqlite3 | SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido |
|Travis-CI | é um serviço de integração contínua distribuído e disponível na nuvem, utilizado para criar e testar projetos de software hospedados no GitHub |

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

**Usuário**

|Atributos| Propriedade | Tipo | Descrisão|
|-----|-----|------|-----|
|IdUsuario | Chave Primaria Obrigatória| Integer| Identificação do Usuário|
|Nome| Obrigatório| String | Nome do usuário|
| Email | Obrigatório | String | Email do Usuário|

**Administrador**
|Atributos| Propriedade | Tipo | Descrisão|
|-----|-----|------|-----|
|IdAdm |Chave Primaria Obrigatória | Integer | Identificação do Administrador|
|IdUsuario| Chave Estrageira Obrigatória | Integer | Identificação do Usuário|
|Login |Obrigatório |String | Login do Administrador|
|Senha| Obrigatório |String | Senha do Administrador|

**Cliente**

|Atributos| Propriedade | Tipo | Descrisão|
|-----|-----|------|-----|
|IdCliente |Chave Primaria Obrigatória | Integer | Identificação do Administrador|
|IdUsuario| Chave Estrangeira Obrigatória | Integer | Identificação do Usuário|
|tipoCliente| Obrigatório| String | Tipo do Cliente
|Login |Obrigatório |String | Login do Administrador|
|Senha| Obrigatório |String | Senha do Administrador |

**Embarcação**

|Atributos| Propriedade | Tipo | Descrisão|
|-----|-----|------|-----|
|idEmbarcação| Chave Primaria Obrigatória| String | Idetificação da embarcação|
|Nome | Obrigatório | String | Nome da embarcação|
|Rota | Obrigatório | String | Nome da Rota|

**Passagem**
|Atributos| Propriedade | Tipo | Descrisão|
|-----|-----|------|-----|
|IdPassagem |Chave Primaria Obrigatória| String| Identificação da Passagem|
|Preço| Obrigatória | String | Preço da passagem|
|Data | Obrigatório | String | Data da passagem|
|Horario | Obrigatório| String | Horario da passagem|
|Origem | Obrigatório | String | Origem do passageiro|
|Destino |Obrigatório | String | Destino do passageiro|

#### 4.1.2 Relacionamento
**Usuario** pode ser um **Cliente** ou **Administrador** pois ambos compartilham vários atributos.


### 4.2 DER

![DER 0.1](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/der.jpg)

## 5 - Visão de Caso de Uso
![Diagrama de casos de uso 0.1](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/develop/docs/diagramas/Diagrama_Casos_de_Uso.jpg)

## 6 - Visão Logica

## 7 - Referências Bibliográficas

[Artefato: Documento de Arquitetura de Software](https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/workproducts/rup_software_architecture_document_C367485C.html)



