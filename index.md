<p align = "center">
  <img src="https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/imagens/logo.png"/>
</p>
<h1> Ziguen </h1>

***Sobre o projeto***

<p>
  A ferramenta ZIGUEN tem o propósito de facilitar a integração entre usuários do transporte fluvial e aqueles que detém a propriedade sobre esses meios de  transporte, para que, assim, o processo da compra das passagens em embarcações seja mais rápido, cômodo, seguro, inovador e intuitivo.
</p>


***Tecnologias***
<ul>
  <li> Google Drive; </li>
  <li> Telegram; </li>
  <li> ZenHub; </li>
  <li> Google meet; </li>
  <li> Docker; </li>
  <li> Linux; </li>
  <li> HTML 5; </li>
  <li> CSS 3; </li>
  <li> Bootstrap; </li>
  <li> Java Script; </li>
  <li> GitHub. </li>

</ul>







## Sumario
1. Documento de Arquitetura
2. Metodologia
-





# Documento de Arquitetura

### 1- Introdução

**1.1 - Finalidade**
O objetivo deste documento é apresentar a arquitetura do projeto Ziguen. Apresentando os principais aspectos do software como um todo, apresentando decisões arquiteturais para o projeto e por fim contém informações que serão utilizadas por desenvolvedores e gestores para compreender a arquitetura utilizada no desenvolvimento, fluxo de informações e as tecnologias envolvidas no projeto.

**1.2 - Escopo**
A ferramenta ZIGUEN tem o propósito de facilitar a integração entre usuários do transporte fluvial e aqueles que detém a propriedade sobre esses meios de transporte, para que assim, o processo de comprar passagens em embarcações seja mais rápido, cômodo, seguro, além de inovador e intuitivo. A ferramenta trata-se de uma aplicação mobile e plataforma web onde as pessoas poderão adquirir passagens sem sair de casa, podendo conferir disponibilidade, horários e formas de pagamento com alguns cliques.


**1.3 - Visão Geral**
O documento está segmentado em Representação de Arquitetura, Metas e Restrições da Arquitetura, Visão de Casos de Uso, Visão Lógica e Visão de Dados.

**1.4 - Definições, acrônomos e Abreviações**

* API - Application Programming Interface: conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por demais aplicativos que desejam utilizar seu serviço
* Framework: Conjuntos de funções e componentes pré definidos.

### 2 - Representação de Arquitetura

![Diagrama de representação](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/diagrama_representacao.png)

**2.1 - Padrão Arquitetural**	
Segundo Ramos (2015), o MVC é um padrão de arquitetura de software, separando sua aplicação em três camadas. A camada de interação do usuário (view), que faz a exibição dos dados, sendo ela por meio de um html ou xml; a camada de manipulação dos dados (model), responsável pela leitura e escrita dos dados, e também suas validações e a camada de controle (controller), responsável por receber todas as requisições do usuário, controlando qual model usar e qual view será mostrado ao usuário. Essa divisão em camadas é realizada para facilitar a resolução de um problema maior.

* Model: Camada da arquitetura responsável pela lógica de négocio, manipulação e validação de dados na aplicação.
* View: Camada da arquitetura responsável pela exibição da interface com o usuário.
* Controller: Camada da arquitetura responsável pela validação das requisições dos usuário de acordo com as regras de autenticação e autorização da aplicação.

**2.2 - Tecnologias**

|tecnologias | descrição |
| ------------------- | ------------------- |
|Bootstrap |  Framework para desenvolvimento em HTML, CSS e JS. |
|Cascading Style Sheets (CSS) |  Alia-se no desenvolvimento do frontend junto com HTML e JS. |
|Docker |  Utilizado para configurar o ambiente de desenvolvimento. |
|Express.js | é um framework para aplicativo da web do Node. js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel |
|Git | Git é uma ferramenta de versionamento de arquivos de código livre |
|HTML |  Alia-se no desenvolvimento do frontend junto com CSS e JS |
|JavaScript |  Alia-se no desenvolvimento do frontend junto com HTML e CSS |
|Jest |  estrutura de teste de JavaScript  |
|Node.js | é uma plataforma para construir aplicações web escaláveis de alta performance usando JavaScript |
|Postgres | Sistema gerenciador de banco de dados relacional,é um projeto desenvolvido de código aberto |
|Travis-CI | é um serviço de integração contínua distribuído e disponível na nuvem, utilizado para criar e testar projetos de software hospedados no GitHub |

### 3 - Metas e Restrições da Arquitetura

**3.1- Metas da Ziguen***

* Facilitar a compra de passagens;
* Facilitar os transportes fluviais;
* Diminuir tempos de espera em filas para compra de passagens.

**3.2- Restrições da Arquitetura**

* Ter acesso à internet;
* Criar um cadastro ziguen;
* Ter um navegador de internet.

### 4 - Visão de Dados
 **4.1 - MER**
 * **4.1.1 -Entidades**

  **Usuário**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idUsuario | Chave primária obrigatória| String| Identificação do Usuário|
|nome| Obrigatório| String | Nome do usuário|
| email | Obrigatório | String | Email do usuário|
| cpf | Obrigatório | String | cpf do usuário|
|login |Obrigatório |String | Login do usuário|
|senha| Obrigatório |String | Senha do usuário |



  **Administrador**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idAdm |Chave primária obrigatória | String | Identificação do Administrador|
|idPassageiro| Chave estrangeira obrigatória | String | Identificação do usuário|
|idProprietario |Chave estrangeira obrigatória | String | Identificação do Proprietário|



  **Passageiro**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idPassageiro |Chave primária obrigatória | String | Identificação do passageiro|
|idUsuario| Chave estrangeira obrigatória | String | Identificação do usuário|




  **Proprietário da embarcação**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idProprietario |Chave primária obrigatória | String | Identificação do Proprietário|
|idUsuario| Chave estrangeira obrigatória | String | Identificação do usuário|




  **Embarcação**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idEmbarcacao| Chave primária obrigatória| String | Idetificação da embarcação|
|idProprietario |Chave estrangeira obrigatória | String | Identificação do proprietário|
|nome | Obrigatório | String | Nome da embarcação|





   **Viagem**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idViagem|Chave primária obrigatória | String | Identificação da viagem|
|idEmbarcação| Chave estrangeira obrigatória| String | Idetificação da embarcação|
|origem | Obrigatório | String | Origem da viagem|
|destino |Obrigatório | String | Destino da viagem|
|data | Obrigatório | String | Data da viagem|
|horario | Obrigatório| String | Horário da viagem|





   **Passagem**

|Atributos| Propriedade | Tipo | Descrição|
|-----|-----|------|-----|
|idPassagem |Chave primária obrigatória| String| Identificação da passagem|
|idViagem| Chave estrangeira obrigatória | String | Identificação da viagem|
|idPassageiro |Chave estrangeira obrigatória | String | Identificação do Passageiro|
|preco| Obrigatória | String | Preço da passagem|


#### 4.1.2 Relacionamento

**Viagem** -- gera -- **Passagem** Uma viagem gera varias passagens, e uma passagem é valida apena para uma viagem. (Cardinalidade 1:n)

**Embarcação** -- realiza -- **Viagem** Uma embarcação pode realizar uma ou mais viagens e uam viagem pode ser realizadas por varias embarcações. (Cardinalidade n:m)

**Administrador** -- cadastra -- **Embarcação** O administrador responsável por cadastrar varias embarcações e as embarcaçãoes são cadastradas por um administrador. (Cardinalidade 1:n)

**Passageiro** -- compra -- **Passagem** Um Passageiro compra uma única passagem, uma passagem poder ser vendida para varios Passageiros. (Cardinalidade 1:n)
 


 * **4.2 DER**

![DER 0.1](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/der.jpg)

## 5 - Visão de Caso de Uso
![Diagrama de casos de uso 0.1](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/master/docs/diagramas/Diagrama_Casos_de_Uso.png)



# Metodologia

## 1. Justificativa 

No contexto atual da disciplina, a equipe está sendo apresentada a várias metodologias de desenvolvimento e gerenciamento, no entanto, como forma de estruturar um padrão para a melhor produtividade da equipe, optamos pela organização nos moldes do arcabouço SRCUM. 

## 2. Descrição da Metodologia

## Scrum

O Scrum é uma estrutura na qual as pessoas podem abordar problemas adaptativos complexos, entregando, de forma produtiva e criativa, produtos do mais alto valor possível.

O próprio Scrum é um framework simples para colaboração efetiva de equipes em produtos complexos. Os co-criadores do Scrum [Ken Schwaber]() e [Jeff Sutherland]() escreveram o [The Scrum Guide]() para explicar o Scrum de forma clara e sucinta. Este guia contém a definição de Scrum. Essa definição consiste nos papéis, eventos, artefatos e regras do Scrum que os unem.

## O Framework

Scrum é simples. É o oposto de uma grande coleção de componentes obrigatórios interligados. Scrum não é uma metodologia. Scrum implementa o método científico do empirismo. O Scrum substitui uma abordagem algorítmica programada por uma heurística, com respeito pelas pessoas e auto-organização, para lidar com a imprevisibilidade e resolver problemas complexos. O gráfico abaixo representa Scrum como descrito por [Ken Schwaber]() e [Jeff Sutherland]() em seu livro [Software in 30 Days], que nos leva desde o planejamento até a entrega do software.

![scrumframework](https://user-images.githubusercontent.com/18387694/44786444-87524900-ab6a-11e8-92f3-6a2df532e5d3.png)

## Valores
Esses valores incluem Coragem, Foco, Compromisso, Respeito e Abertura. Leia o [Guia do Scrum]() para saber mais sobre esses valores, como eles se aplicam ao Scrum.

![scrumvalues](https://user-images.githubusercontent.com/18387694/44786604-08114500-ab6b-11e8-93de-897a64953dc6.png)

## Papéis do Time

O Time Scrum consiste em um Dono do Produto (Product Owner ou PO), a Equipe de Desenvolvimento (Devs) e um Scrum Master (SM). As equipes do Scrum são auto-organizadas e interfuncionais. Equipes auto-organizadas escolhem a melhor forma de realizar seu trabalho, em vez de serem dirigidas por outras pessoas fora da equipe. Equipes multifuncionais têm todas as competências necessárias para realizar o trabalho sem depender de outros que não fazem parte da equipe. O modelo de equipe no Scrum foi desenvolvido para otimizar a flexibilidade, a criatividade e a produtividade.

## Eventos

Eventos são usados ​​no Scrum para criar regularidade e minimizar a necessidade de reuniões não definidas no Scrum. Todos os eventos são armazenados em **time-box**. Quando a Sprint começa, sua duração é fixa e não pode ser reduzida ou aumentada. Os eventos restantes podem terminar sempre que o objetivo do evento for alcançado, garantindo que uma quantidade apropriada de tempo seja gasta sem permitir desperdício no processo. Os Eventos Scrum são:

- Sprint
- Planejamento de sprint
- Daily
- Revisão de Sprint
- Retrospectiva da Sprint


## Artefatos

Os artefatos do Scrum representam **trabalho** ou **valor** para fornecer transparência e oportunidades de inspeção e adaptação. Os artefatos definidos pelo Scrum são projetados especificamente para maximizar a transparência das principais informações, para que todos tenham o mesmo entendimento do artefato.

Os artefatos do Scrum são:

- Backlog do produto
- Backlog da Sprint
- Incremento

## 3. Descrição da Metodologia

## Nossas Modificações

Durante a primeira semana de projeto fizemos uma reuniao geral acerca da estrutura do projeto. Em seguida, elaboramos uma planilha para que cada integrante da equipe pudesse preencher com seus horários disponíveis, objetivando assim escolher o melhor horário para as reuniões semanais. Após a escolha do horário, definimos o planejamento de acordo com a divisão abaixo:

##### - Sprint (7 dias)

Percebemos que um bom período da sprint seria de 7 dias e que um tempo maior que isso acabaria trazendo falta de comunicação e erros no andamento do projeto. A nossa sprint tem início na sexta, após a aula de MDS e finaliza na quinta, às 11h:00min.

#### - Daily (De segunda a quinta)

Optamos pela Daily em quatro dias semanais apenas, pois achamos coerente quanto a comunicação. Todos os integrantes devem responder as seguintes perguntas:
- O que você fez desde a última sprint?
- O que pretende fazer até a próxima?
- Há algum obstáculo que esteja impedindo você ou a equipe de alcançar a meta da sprint?

Ressalta-se que a equipe realiza comunicação diária acerca do projeto, tanto no telegram quanto nas issues criadas para cada assunto.

#### - Planejamento na quinta: das 12h às 13h30min 

Vimos que seria necessário fazer reuniões para definir o planejamento da semana e essa reunião acontece toda quinta, após a aula de MDS. Na reunião, realizamos o review e em seguida o planning.

#### - ZenHub

Utilizaremos o ZenHub para melhor organização e acompanhamento das atividades desenvolvidas.

#### - Velocity

Ainda utilizando o plugin do ZenHub vai ser útil para comparar o andamento do time durante as sprints

#### - Integração contínua e Deploy Contínuo

Para evitar possíveis erros na branch de produção e para melhorar o fluxo de entrega contínua vamos aplicar o conceito de **integração contínua** e **deploy contínuo** que será utilizado um fluxo de build, testes e deploy.

#### - Teste de Regressão

#### - Definição de Pronto

Vamos definir que alguma feature ou bug está concluído quando ele possuir 3 coisas
```
Código -> Teste -> Review
```
#### - Análise estática de código

Para analisar o nível do código sendo produzido vamos utilizar ferramentas de análise estática.

## Diagrama metodológico

![Imagen](https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/diagramas/diagrama_metodologia.png)



