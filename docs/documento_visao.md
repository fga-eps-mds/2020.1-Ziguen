# Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  28/08/2020 |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Documento de visão |
|  1.1 |  02/09/2020 |  Gabriela e Geise |  Levantamento de Requisitos funcionais, não funcionais e regras de negócio |
| 2.0  |  09/09/2020 |  Francisco e Liverson |  Documento de Arquitetura |
|  2.0.1 |  16/09/2020 |  Giulia e Liverson |  Diagrama de Caso de Uso, diagrama de Sequência e modelo Lógico |
|  2.0.2 | 16/09/2020  |  Geise e Gabriela |  Diagrama de Classes, diagrama de Estados, diagrama de objetos e diagrama de comunicação |
| 2.0.3  |  16/09/2020 |  Francisco e Edson |  Diagrama de Atividades, diagrama de componentes, diagrama de pacotes e diagrama entidade relacionamento |
|  3.0 | 23/09/2020  |  Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Projeto interface: baixa fidelidade |
|  3.0.1 | 23/09/2020  |  Equipe - Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Projeto interface: alta fidelidade (front-end) |
|  3.0.2 | 30/09/2020  |  Equipe - Edson, Francisco, Gabriela, Geise, Giulia e Liverson |  Iniciando o back-end |
|   |   |   |   |
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
O sistema possui dois tipos de atores, sendo eles:     
    Usuário Administrador:      
    Usuário Cliente:
Dono da embarcação;
Tripulante; 

| Num  |  Ator  | Definição e Privilégio de Acesso e Segurança |  
| ------------------- | ------------------- | ------------------- | 
|  1 |  Usuário Administrador | Responsável pelo gerenciamento do sistema, realizando diferentes atividades, como: incluir novas viagens, origens, destinos e embarcações, sendo cabível a ele a efetivação das vendas de passagens fluviais. |
|  2 |  Usuário Cliente | Interage com o sistema a partir de um navegador web. É desejável que seja fácil usar o sistema, mas, em caso de dúvida, deve haver algum tipo de suporte ao usuário cliente.|

### 3. Requisitos

### 4. Regras de Negócio


| Num | Requisito Associado | Descrição |
| ---- | ----| ----|
| RN 01 | Cadastro e inclusão de embarcações. | Uma embarcação só poderá ser cadastrada se informar: nome da embarcação, origem, destino, data e hora da viagem.|
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

**4.2  Arquitetura de Software – Modelo – Visão – Controlador (MVC)**

Segundo Ramos (2015), o MVC é um padrão de arquitetura de software, separando sua aplicação em três camadas. A camada de interação do usuário (view), que faz a exibição dos dados, sendo ela por meio de um html ou xml; a camada de manipulação dos dados (model), responsável pela leitura e escrita dos dados, e também suas validações e a camada de controle (controller), responsável por receber todas as requisições do usuário, controlando qual modelo usar e qual view será mostrado ao usuário. Essa divisão em camadas é realizada para facilitar a resolução de um problema maior.

O MVC fora escolhido como padrão arquitetural do ZIGUEN em virtude de este já ser utilizado em muitos projetos devido à arquitetura que possui, o que possibilita a divisão do projeto em camadas muito bem definidas. Para Bastos (2011) uma das vantagens de se utilizar o padrão MVC é que ao realizar qualquer tipo de alteração em uma das camadas não interfere nas demais, facilitando a atualização de layouts, alteração nas regras de negócio e adição de novos recursos. Em caso de grandes projetos, o MVC facilita muito a divisão de tarefas entre a equipe. Em decorrência de todas essas vantagens, a equipe de desenvolvimento optou pela utilização deste, já que
ele também possibilita a facilidade na manutenção e adição de recursos, maior integração da equipe e/ou divisão de tarefas, além da facilidade em manter o seu código sempre limpo.

O padrão MVC, aplicado ao sistema ZIGUEN, atua como mostra a figura abaixo
(Arquitetura de Software ZIGUEN):

A comunicação entre interfaces e regras de negócios é definida através de um controlador. Quando um evento é executado na interface gráfica, que é a chamada View, como um clique em um botão, a interface irá se comunicar com o controlador que por sua vez se comunica com as regras de negócios.

**4.3  Identificação dos Casos de Uso**

**4.4  Diagrama de Casos de Uso**

**4.5  Diagrama de Classes**

**4.6  Diagramas de Sequência**

**4.7  Diagramas de Estados**

**4.8  Diagrama de Objetos**

**4.9  Diagrama de Atividades**

**4.10  Diagrama de Componentes**

**4.11  Diagrama de Pacotes**

**4.12  Diagrama de Comunicação**

### 5. Diagrama Entidade Relacionamento
