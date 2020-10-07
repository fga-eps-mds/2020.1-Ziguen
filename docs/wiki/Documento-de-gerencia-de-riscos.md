# Riscos do Projeto

|    Data    | Versão |                             Alteração                             |                    Autor                    |
|:----------:|:------:|:-----------------------------------------------------------------:|:-------------------------------------------:|
| 09/09/2020 |   0.1  | Criação do documento | @GeiseSaunier |
| 09/09/2020 |   0.2  | Adicionando referência de quantificação | @GeiseSaunier |
| 09/09/2020 | 1.0 | Adicionando tratamento de riscos | @GeiseSaunier |
| 15/09/2020 | 2.0 | Adicionando controle de riscos | @GeiseSaunier |
| 03/10/2020 | 2.1 | R14 levantamento de riscos positivos | @edsondearaujo e @GeiseSaunier |
| 07/10/2020 | 2.2 | Revisando gerência de riscos | @GeiseSaunier e @liversonp |
| 07/10/2020 | 2.3 | Editidando erros na gerência de riscos | @gabrielapivetta e @liversonp |

## 1- Levantamento de Riscos Negativos

| Label | Título | Descrição | Probabilidade | Nível do Impacto |
| ----- | ------ | --------- | ------------- | ---------------- |
| R01 | Escopo do projeto | O escopo do projeto é grande e pode ser que não seja possível finalizar | Alta | 5 |
| R02 | Tecnologia desconhecida | Falta de conhecimento da tecnologia pode dificultar o desenvolvimento do projeto | Alta | 5 |
| R03 | Atraso nas entregas | Entregas não condizentes com o planejamento realizado | Moderada | 4 |
| R04 |  Baixa produtividade da equipe | Entregas não condizentes com o planejamento realizado | Moderada | 5 |
| R05 |  Falta de documentação | Falta de documentação atualizada com a implementação pode dificultar o acompanhamento do projeto | Muito alta | 5 |
| R06 |   Complexidade da arquitetura | Arquiteturas complexas podem, por conta da curva de aprendizado, reduzir a produtividade do time | Alta | 5 |
| R07 |   Falta de disponibilidade dos membros | Membros não presentes nos rituais da metodologia acabam ficando desatualizados em relação ao andamento do projeto | Muito alta | 4 |
| R08 |   Pandemia | Membros podem produzir menos devido a situação atual | Muito alta | 5 |
| R09 |   Comunicação entre o front-end e o back-end | Membros com pouco conhecimento em relação as tecnologias pode dificultar tal comunicação | Muito alta | 5 |
| R10 |   Mudança nas tecnologias | Tecnologias escolhidas em primeiro momento, por conta da inexperiência, podem não ser suficientes para desenvolver todo o projeto em si | Alta | 5 |
| R11 |   Problemas com equipamento de trabalho | Membros da equipe podem ser menos produtivos nas entregas devido ao baixo desempenho da máquina  | Moderada | 3 |

## 2- Levantamento de Riscos Positivos

| Label | Título | Descrição | Probabilidade | Nível do Impacto |
| ----- | ------ | --------- | ------------- | ---------------- |
| R12 | Boa integração do time | Times bem integrados possuem um melhor ambiente de trabalho, propiciando o aumento da produtividade e o engajamento dos membros | Muito alta | 5 |
| R13 | Engajamento dos membros em relação ao projeto | Membros mais engajados estimulam a criatividade e a resiliência durante o processo de desenvolvimento | Muito alta | 5 |
| R14 | Alta produtividade da equipe | Alta produtividade da equipe reduz a probabilidade de se ocorrerem atrasos | Moderada | 5 |
| R15 | Estabilidade técnica dos pipelines de produção | Com os pipelines estáveis, tem-se mais tempo para ser dedicado às outras atividades pertinentes ao projeto | Alta | 5 |
| R16 | Arquitetura estar bem definida | Com uma arquitetura bem definida, menos mudanças impactantes ocorrem e, portanto, ocorre menos retrabalho | Muito alta | 5 |
| R17 | Feedback de mentores | A equipe vem buscando apoio de monitores e com isso avançando no desenvolvimento do projeto | Moderada | 4 |

## 3- Probabilidade x Impacto

### 3.1- Tabela de probabilidades

| Probabilidade | Intervalo | Nível |
| ------------- | --------- | ----- |
| Muito baixa | Menos de 20% | 1 |
| Baixa | 21% a 40% | 2 |
| Moderada | 41% a 60% | 3 |
| Alta | 61% a 80% | 4 |
| Muito alta | Mais de 80% | 5 |

### 3.2 - Tabela de impactos

| Probabilidade | Intervalo | Nível |
| ------------- | --------- | ----- |
| Muito baixo | Impacto não significativo | 1 |
| Baixo | Impacto de baixa influência | 2 |
| Moderado | Impacto notável com poucas consequências | 3 |
| Alto | Impacto que compromete o andamento do projeto | 4 |
| Muito alto | Impacto que inviabiliza o andamento do projeto | 5 |

### 3.3 - Matriz de quantificação dos riscos

| Probabilidade/Impacto | Muito baixo | Baixo | Moderado | Alto | Muito alto |
| --------------------- | ----------- | ----- | -------- | ---- | ---------- |
| Muito baixa | 1 | 2 | 3 | 4 | 5 |
| Baixa | 2 | 4 | 6 | 8 | 10 |
| Moderada | 3 | 6 | 9 | 12 | 15 |
| Alta | 4 | 8 | 12 | 16 | 20 |
| Muito alta | 5 | 10 | 15 | 20 | 25 |

## 4 - Planejamento de resposta aos riscos
A resposta aos riscos tem como objetivo reduzir as ameaças provindas dos riscos negativos e aumentar as oportunidades e melhorias dos riscos positivos.

#### 5 - Prevenir
Estratégia de resposta ao risco para eliminar a ameaça ou proteger o projeto do seu impacto. Envolve a alteração dos planejamentos do projeto de forma a, por exemplo, estender o cronograma ou reduzir o escopo.

#### 5.1.1 - Transferir
Essa estratégia consiste em transferir o impacto e a responsabilidade de resposta da ameaça para terceiros. Não elimina o risco, nem nega a existência desse risco. Esse esforço por meio de um acordo na maioria das vezes é tirado para terceiros.

#### 5.1.2 - Mitigar
Mitigar o risco é uma estratégia de resposta a riscos onde a equipe trabalha para reduzir a probabilidade de ocorrência do risco e/ou a redução do impacto caso esse risco ocorra. Reduzir a probabilidade de ocorrer o risco é mais eficaz do que tentar reparar o dano causado por um risco.

#### 5.1.3 - Aceitar
Essa estratégia consiste em a equipe reconhecer o risco e não agir, a menos que ele ocorra. Quando qualquer método já exposto é inviável então essa abordagem deve ser aplicada.

### 5.2 - Riscos positivos
São os riscos que afetam positivamente o projeto. O PMBoK também tem uma abordagem para tais riscos, de modo que os mesmos sejam mais aproveitados:

#### 5.2.1 - Explorar
Essa estratégia tem como objetivo auxiliar a organização a garantir que aquela oportunidade seja concretizada. Isso pode ser alcançado eliminando incertezas associadas aquele risco positivo.

#### 5.2.2 - Melhorar
Melhorar é uma estratégia utilizada para aumentar a probabilidade e/ou impacto de um risco positivo. Identificar e maximizar os principais fatores que contribuem com esse risco pode aumentar a probabilidade e/ou impacto

#### 5.2.3 - Compartilhar
Compartilhar um risco significa de certa forma uma transferência, parcialmente ou integralmente, da responsabilidade daquele risco ao um terceiro que tenha mais capacidade de explorá-lo.

#### 5.2.4 - Aceitar
Essa estratégia consiste em reconhecer que essa oportunidade existe porém não persegui-la.

## 6 - Controle dos riscos

| Label | Título | Descrição | Ação tomada |
| ----- | ------ | --------- | ------------- | 
| R01 | Escopo do projeto | Como o escopo do sistema em si é complexo, optou-se apenas por algumas funcionalidades | Implementar de acordo com as features destacadas. |
| R02 | Tecnologias desconhecidas | Pode ser difícil implementar utilizando tecnologias desconhecidas pela equipe. | definir um batedor para explicar sobre as tecnologias (haverá troca de batedor, sempre). Além disso, aulas em grupo serão um diferencial.  |
| R03 | Atraso nas entregas | É importante gerenciar bem as sprints para que as entregas sejam realizadas no prazo. | estipular prazos, estabelecer metas e definir critérios de aceitação. |
| R04 | Baixa produtividade da equipe. | Período de isolamento pode dificultar a produtividade da equipe. | Trabalhar sempre em conjunto, se possível na sala do jitsi para que os membros da equipe não se sintam sozinhos.|
| R05 | Falta de documentação | documentação desatualizada pode dificultar o desenvolvimento do projeto | durante cada sprint, verificar sempre a atualização da documentação. |
| R06 | Complexidade da arquitetura | arquitetura mal definida pode acarretar problemas ao desenvolvimento.| incentivar estudos de arquitetura, de forma que a equipe esteja sempre alinhada quanto as decisões.|
| R07 | Falta de disponibilidade dos membros | membros não presentes na reunião podem ficar desatualizados quanto ao sistema | criar ata de reunião para atualizar os membros ausentes de todas as decisões. (Ressalta-se a importância de reforçar ao membros da equipe que a presença nas reuniões é primordial.) |
| R08 | Pandemia | Membros podem produzir menos devido a situação atual | Incentivar os membros a desenvolver no seu tempo, priorizando sua saúde mental.|
| R09 |   Comunicação entre o front-end e o back-end | Membros com pouca carga de conhecimento referente a essas duas frentes pode dificultar o desenvolvimento do projeto | Pesquisar, compartilhar e reunir o grupo para estudar possíveis soluções para resolver o problema.| 
| R10 |   Mudança nas tecnologias | As tecnologias escolhidas podem não ser a melhor solução e dessa forma provocar uma mudança repentina no desenvolvimento projeto | Estudar, junto a equipe, soluções viáveis e pesquisar projetos de equipes anteriores ajuda a encontrar novos caminhos. |
| R11 |   Problemas com equipamento de trabalho | Possíveis falhas na máquina dos membros da equipe. | Buscar identificar qual membro está com esse problema e oferecer um suporte adequado, seja emprestando outra ferramenta ou fazendo trabalho pareado, para que ambos participem. |
