## Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  28/08/2020 |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Documento de visão |
|  1.1 |  02/09/2020 |  Gabriela e Geise |  Levantamento de Requisitos funcionais, não funcionais e regras de negócio |
| 2.0  |  09/09/2020 |  Francisco e Liverson |  Documento de Arquitetura |
|  2.0.1 |  16/09/2020 |  Giulia e Liverson |  Diagrama de Caso de Uso, diagrama de Sequência e modelo Lógico |
|  2.0.2 | 16/09/2020  |  Geise e Gabriela |  Diagrama de Classes, diagrama de Estados, diagrama de objetos e diagrama de comunicação |
| 2.0.3  |  16/09/2020 |  Francisco e Edson |  Diagrama de Atividades, diagrama de componentes, diagrama de pacotes e diagrama entidade relacionamento |
|  3.0 | 23/09/2020  |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Projeto interface: baixa fidelidade |
|  3.0.1 | 23/09/2020  |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Projeto interface: alta fidelidade (front-end) |
|  3.0.2 | 30/09/2020  |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Iniciando o back-end |
| 3.0.3  |  02/10/2020 | Edson e Geise  |  Revisão e inclusão do ator usuário proprietário |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |


## Sumário
1.  **Introdução**
- 1.1. Propósito do Documento de Requisitos
- 1.2. Público Alvo
2.  **Descrição Geral do Produto**
- 2.1. Situação Atual
- 2.2. Escopo
- .3. Atores
3. **Requisitos**
- 3.1 Requisitos Funcionais
- 3.2 Requisitos Não Funcionais
4. **Regras de Negócio**
- 4.1 Restrições de Software
- 4.2 Arquitetura de Software - Modelo-Visão-Controlador (MVC)
- 4.3 Identificação dos Casos de Uso
- 4.4 Diagrama de Casos de Uso
- 4.5 Diagrama de Classes
- 4.6 Diagramas de Sequência
- 4.7 Diagramas de Estados
- 4.8 Diagrama de Objetos
- 4.9 Diagrama de Atividades
- 4.10 Diagrama de Componentes
- 4.11 Diagrama de Pacotes
- 4.12 Diagrama de Comunicação
5. **Diagrama Entidade Relacionamento**
6. **Modelo Lógico**
7. **Projeto Interface**
- 7.1 Baixa Fidelidade
- 7.2 Alta Fidelidade
8. **Referências**





### 1.  Introdução

**1.1  Propósito do Documento de Requisitos**  
Este documento tem o propósito de apresentar o sistema ZIGUEN: um sistema para venda de passagens fluviais, bem como seus requisitos funcionais e não-funcionais e diagramas UML.  Além disso, os requisitos dos usuários deverão ser atendidos pelo sistema, que posteriormente será construído neste projeto. 
Neste documento também estão presentes: uma descrição do produto, interfaces e comportamento esperado do sistema.

**1.2  Público Alvo**  
Este documento destina-se aos stackholders (arquitetos de software, engenheiros de software, testadores e usuários classificados como usuários fornecedores).

### 2. Descrição Geral do Produto

Com intuito de facilitar a descrição do produto/serviço, será utilizada neste documento a metodologia 5W2H que abordará algumas nuances do produto como do que se trata, a quem se destina, entre outros aspectos que caracterizam a plataforma ZIGUEN.

**O que é**

A ferramenta ZIGUEN tem o propósito de facilitar a integração entre usuários do transporte fluvial e aqueles que detém a propriedade sobre esses meios de transporte, para que assim, o processo de comprar passagens em embarcações seja mais rápido, cômodo, seguro, além de inovador e intuitivo.
A ferramenta trata-se de uma aplicação mobile e plataforma web onde as pessoas poderão adquirir passagens sem sair de casa, podendo conferir disponibilidade, horários e formas de pagamento com alguns cliques.

**Para quem e onde**

A ferramenta foi conceitualizada, desenvolvida, implementada, testada e lançada por estudantes da Universidade de Brasília para todos aqueles, que a princípio, utilizam das embarcações para se locomover na região de Maués até Manaus no estado do Amazonas. Bem como, os proprietários dos barcos que querem comercializar o serviço.

**Por quê**

A ZIGUEN vem com o intuito de preencher um gap que é o usuário pode programar sua viagem com antecedência e assegurar esse direito. Além de possibilitar uma melhor organização tanto para o comprador quanto para o vendedor a respeito do controle de passageiros, quantia arrecadada por embarcação etc.

**Quando utilizar**

A plataforma vem com a proposta de ser utilizada a qualquer momento desde que haja disponibilidade de passagem no horário e trajeto desejado.

**Como será utilizada**

A plataforma tem o intuito de facilitar a interação entre comprador e vendedor, portanto ela visa atender ambos.
No caso do vendedor, ou seja, o proprietário da empresa que presta o serviço de transporte fluvial, a plataforma poderá ser usada para cadastrar as informações primordiais da empresa (nome, CNPJ, etc.), das embarcações (modelo, última vistoria, capacidade, etc.), além dos dados bancários para recebimento das passagens vendidas e dos horários programados para a partida dos barcos e o local de partida.
No caso do comprador, ou seja, o cliente dessas empresas de transporte fluvial a plataforma será utilizada com os dados do usuário (nome, CPF etc.). O usuário poderá pesquisar a rota desejada, empresas que fazem esse trajeto (se houver), horários, bem como os valores. Uma vez selecionado, ele poderá comprar escolhendo a forma de pagamento. No seu e-mail (ou aplicativo) ele receberá a confirmação e comprovante da passagem após a confirmação do pagamento.

**Quanto custará**

A plataforma será de uso gratuito: o cadastro de empresas, embarcações e a busca por passagens. O único custo aplicado, será uma taxa sobre o valor da passagem.

**2.1  Situação Atual**

Atualmente, a única maneira possível de adquirir passagens é comprando no local que a embarcação parte. Além disso, apesar de ter um cronograma, não existe a possibilidade de comprar passagens online com antecedência, ou seja, o cliente só pode adquirir no momento de partida da embarcação ou diretamente na agência física, o que gera filas, espera e principalmente constrangimentos, pois uma vez que a embarcação atinge a lotação máxima os usuários que não foram contemplados simplesmente não podem fazer nada e perdem o tempo de locomoção e fila.

**2.2  Escopo**

| Num  |  Módulo  | Descrição |  
| ------------------- | ------------------- | ------------------- | 
|  1 |  Sistema web (responsivo.) |O sistema deve funcionar em um servidor web e ser acessível a internet. 

**2.3 Atores** 
O sistema possui três tipos de atores, sendo eles:     
   - Usuário Administrador;      
   - Usuário Cliente (Passageiro);
   - Usuário Proprietário (Dono da embarcação) 

| Num  |  Ator  | Definição e Privilégio de Acesso e Segurança |  
| ------------------- | ------------------- | ------------------- | 
|  1 |  Usuário Administrador | Responsável pelo gerenciamento do sistema, realizando diferentes atividades, como: incluir novas viagens, origens, destinos e embarcações, sendo cabível a ele a efetivação das vendas de passagens fluviais. |
|  2 |  Usuário Cliente | Interage com o sistema a partir de um navegador web. É desejável que seja fácil usar o sistema, mas, em caso de dúvida, deve haver algum tipo de suporte ao usuário cliente.|
|  3 |  Usuário Proprietário | O usuário proprietário será cadastrado pelo administrador e sua interação com o sistema é basicamente visualizar os dados referentes a sua embarcação|

### 3. Requisitos

**3.1 Requisitos Funcionais**

|ID| Descrição| Prioridade|
|--------|--------|--------|
|  RF 01  |  O sistema deve realizar a venda de passagens fluviais.   |  Essencial   |
|  RF 02  |  O sistema deve permitir ao usuário administrador o cadastro das embarcações.  |  Essencial   |
|  RF 03  |  O sistema deve permitir ao usuário administrador a inclusão de embarcações.   |  Essencial   |
|  RF 04  |  O sistema deve permitir ao usuário administrador a exclusão de embarcações.   |  Essencial   |
|  RF 05  |  O sistema deve permitir ao usuário administrador a alteração de embarcações.   |  Essencial   |
|  RF 06  |  O sistema deve permitir que o usuário cliente adquira uma ou mais passagens.   |  Essencial   |
|  RF 07  |  O sistema deve permitir ao usuário cliente consultar as viagens programadas.   |  Essencial   |
|  RF 08  |  O sistema deve permitir uma interface diferenciada ao usuário administrador.   |  Essencial   |
|  RF 09  |  O sistema deve permitir uma interface específica ao usuário cliente.   |  Essencial   |
|  RF 10  |  O sistema deve permitir que o usuário cliente realize um cadastro pessoal.   |  Essencial   |
|  RF 11  |  O sistema deve permitir que a consulta as viagens programadas possam ser realizadas através do nome das cidades, origem, destino e por embarcações.   |  Essencial   |
|  RF 12  |  O sistema deve emitir comprovante online de passagens adquiridas.   |  Essencial   |
|  RF 13  |  O sistema deve prover de uma interface com dados das viagens: origem, destino, data e hora, bem como as embarcações disponíveis para cada viagem.   |  Essencial   |
|  RF 14  |  O sistema deve permitir ao usuário cliente inserir seus dados para então efetivar a compra de passagens.   |  Essencial   |
|  RF 15  |  O sistema deve permitir que o cliente usuário possa cancelar uma compra de passagem realizada.   |  Essencial   |
|  RF 16  |  O sistema deve permitir ao usuário cliente realizar pagamento através de cartão de crédito ou débito.   |  Essencial   |
|  RF 17  |  O sistema deve permitir ao usuário cliente a opção de imprimir uma ficha de compensação bancária para a realização do pagamento.   |  Essencial   |
|  RF 18 |  O sistema deve permitir ao usuário administrador o cadastro do usuário proprietário.  |  Essencial  |
|   |    |    |


**3.2 Requisitos Não Funcionais**

|ID| Descrição| Prioridade|
|--------|--------|--------|
| RF 01| Os dados dos usuários clientes serão gravados no sistema de banco de dados utilizando criptografia de dados SHA3.| Segurança |
| RF 02| O sistema deve ser desenvolvido para Web.| Interoperabilidade |
| RF 03| O sistema deve dispor de design responsivo.| Usabilidade |
| RF 04| O sistema deve utilizar o padrão UML 2.0 para a documentação.| Padrões |
| RF 05| O sistema deve utilizar a linguagem de programação Javascript.| Portabilidade |
| RF 06| A interface do sistema deve ser de fácil manipulação.| Usabilidade | 
| RF 07| O sistema deve dispor de tratamento de requisições de formulários em sites públicos captcha.| Segurança |
| RF 08| Os dados do usuário cliente serão trafegados no sistema de banco de dados utilizando criptografia de dados SHA3. | Segurança |
| | | |

### 4. Regras de Negócio


| Num | Requisito Associado | Descrição |
| ---- | ----| ----|
| RN 01 | Cadastro e inclusão de embarcações. | Uma embarcação só poderá ser cadastrada se informar: nome da embarcação, nome do proprietário, origem, destino, data e hora da viagem.|
| RN 02 | Compra de passagens. | Para realizar uma compra, o usuário cliente poderá realizar de forma direta ou realizando um cadastro no site. |
| RN 03 | Compra de passagens. | O número de compras deve ser limitado até o valor de passageiros que a embarcação suportar no atual momento da compra. |
| RN 04 | Realizar pagamento. | O usuário cliente deverá realizar o pagamento inserindo dados de seu cartão de crédito ou débito, ou ainda através de boleto bancário. Ao inserir as informações necessárias, deverá confirmar a compra. |
| RN 05 | Consulta de passagens. | Para realizar uma busca pelo pedido o usuário cliente precisa estar logado com seu perfil no site. |
| RN 06 | Cancelamento de compra. | O usuário cliente somente poderá cancelar uma compra se estiver logado com seu perfil no site. |
| RN 07 | Compra, alteração e cancelamento. | O usuário cliente deve receber um e-mail com as informações necessárias caso realize qualquer uma das três transações, podendo gerar um PDF com essas informações. |

**4.1 Restrições de Software**

| Num | Restrição |
| ---- | ----|
| 1 | O aplicativo poderá ser acessado em navegadores web. |

**4.2  Identificação dos Casos de Uso**

**4.3  Diagrama de Casos de Uso**

**4.4  Diagrama de Pacotes**

**4.5  Diagramas de Sequência**


### 5. Diagrama Entidade Relacionamento
