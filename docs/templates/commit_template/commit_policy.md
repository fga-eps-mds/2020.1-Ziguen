# Política de Commits
## Histórico de Versões
| Data  |  Autor  | Descrição  |  Versão  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  26/08/2020 | Edson Soares | Criação do documento | 1  |

### *Commits* atômicos
Dividir o desenvolvimento do trabalho em *commits* pequenos, concisos, fazendo com que cada *commit* implemente uma funcionalidade.

### *Commits* em Inglês
O padrão das mensagens dos *commits* desse projeto, deve ser efetuada no idioma **Inglês**. Afim de deixar o projeto mais acessível ao público global.

### Regra 50/72
As mensagens devem possuir no máximo 50 caracteres, caso seja necessário uma mensagem melhor, escreva um resumo de até 50 caracteres, adicione uma linha em branco e descreva melhor o commit em quantas linhas forem necessárias, porém cada linha deve respeitar o tamanho máximo de 72 caracteres. Caso seu commit necessite mais espaço que isso ele não é atômico.

# Anatomia do *Commit*
A anatomia do commit deve seguir o seguinte padrão:

### Formato:
```
<tipo>(#número da issue): assunto
  
<corpo>
...
```


### Assunto

-   Máximo de 50 caracteres
-   Tipo de escopo deve estar em letras minúsculas

Exemplo:

`fix(#13): route correction /login`.

Os valores permitidos para o  `tipo`  são:

-   `feat`: nova funcionalidade
-   `style`: formatação geral no código
-   `refact`: refatoração de código
-   `test`: adicionar/refatorar testes
-   `fix`: correções
-   `docs`: relacionado a documentação

### Corpo

Se for necessário dar um contexto ao commit e explicar o porquê das mudanças, escreva no corpo do commit seguindo a regra:

-   Deve conter o  `o que`  e o  `por que`  foi feita a mudança
-   Máximo de 72 caracteres por linha

Exemplo:

```
refactor(#28): change in registration button 

The button was not intuitive
