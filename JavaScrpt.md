# Objetos
Um objeto é um código que tem propriedades e métodos, caracteristicas unicas. Como uma pessoa, uma pessoa tem propriedades como 'nome' e 'idade'. <br> Criaremos um objeto chamado 'pessoa'.
##  Declaração de objetos
Um objeto é declarado da seguinte maneira:
```
let person = {
    name: 'Joao',
    age: 12
};
```
este objeto tem o nome de 'person' e tem os atributos 'name' e 'age'.
## `Alterando valores dos atributos`
Existem duas formas de alterar valores dos atributos:
- A primeira é com `Dot Notation`:
```
person.name = 'Kamila';
```
é a forma mais simples e curta de atribuir ou alterar valores dos atributos de um objeto.
- A segunda é com `Backet Notation`
```
let selection = 'name';
person[selection] = 'Fernanda';
```
É mais recomendada se não sabe ao certo qual atributo vai ser alterado, podendo atribuir a variavel auxiliar `selection` o nome do atributo e em seguida usando `Backet Notation`.
## `Declarando um Objeto`
Exitem duas formas de declaram um objeto.
- `Factory Function`
    ```
        //criando um objeto
        function createCircle(radius){
            return{
                radius,
                draw(){
                    alert('Desenhando');
                }
            };
        }

        // declarando o objeto
        let objeto1 = creatCircle(1);
    ```
- `Constructor Function`
    ```
        // criando um objeto
        function Circle(radius){
            this.radius = radius;
            this.draw = function(){
                alert('Desenhando');
            }
        }

        // declarando um objeto
        const objeto2 = new Circle(2);
    ```
## `Adicionando e removendo atributos a um objeto em JS`
    Em JS podemos também adicionar ou remover um atributo em um objeto, veja abaixo:
```
    const circle = {
        radius: 1
    };
    circle.color = 'yellow'; // adicionando um atributo
    circle.draw = function(); // adiconando um metodo

    delete circle.color; // deletando o atributo
    delete circle.draw; // deletando o metodo
```
O que pode causar um pouco de confusao é que o objeto circle é um `objeto constante`, mas em JS um objeto constante não significa que não pode ter outros atributos ou metodos, significa que não pode ter outra definição. <br> O código abaixo não é permitido, pois esta sendo atribuido ao objeto `circle`, que é uma constante, outra definição de objeto.  
```
circle = {};
```
## `Passando valores por Parâmetro em JS`
    Variaveis que apontam para o mesmo endereço de memória. Se alterar o valor guardado neste endereço, ambas passaram a apresentar este valor.
Exemplo com variaveis:
```
    let x = {value: 10};
    let y = x;
    x.value = 20;
    alert('x ' + x);
    alert('y ' + y);
```
Exemplo com Funções:
```
    let y = {value: 10};
    funtion atribui(x){
        x.value = 20;
        alert('x ' + x);
    }
    atribui(y);
    alert('y ' + y);
```
## `Lendo os tributos e metodos de um objeto`
    Existem algumas maneiras de ler os atributos e metodos de um objeto.
    Objeto sendo declarado:
```
    const circle = {
        radius: 1,
        draw(){
            alert('draw');
        }
    };
```
    Lendo com for...in:
```
for (let key in circle)
    alert(key, circle[key]);
```
    Lendo com for...of e Object.keys:
```
for (let key of Object.keys(circle))
    alert(key);
```
    Lendo com for...of e Object.entries:
```
for(let entry of Object.entries(circle))
    alert(entry);
```
## `Verificando um atributo no objeto`
    Podemos usar o código abaixo para veriifacr se um atributo especifico esta no objeto:
```
if('radius' in circle) alert('yes');
```
## `Clonando um Objeto`
    Podemos clonar um objeto da seguinte forma:
```
    
    for (let key in circle)
        another[key] = circle[key];
    alert(another);
```
    Ou esta outra maneira abaixo onde podemos passar mais de um objeto e tambem, entre as '{}', podemos adicionar mais atributos par o objeto que esta compiando.
```
    const another = Object.assign({}, circle);
```
    Ou esta outra forma abaixo, onde o objeto que esta copiando é exatamente o mesmo do copiado
```
    const another ={ ...circle};
```    


# Funções
Uma função é um código que realiza uma tarefa especifica, por exemplo fazer um alerta dizendo  'Olá Fernanda'.
## Declarando e chamando uma função
As funções podem ou não retornar valores e podem ou não terem parametros de entrada.<br>
- Função sem retorno e sem parametros de entrada:
    ```
        function escreverOla(){
            alert('Olá, bem vindo(a)');
        }

        escreverOla(); // Chamando a função
    ```
- Função com retorno e sem parametros de entrada:
    ```
        function escreverOla(){
            return 'Olá, bem vindo(a)';
        }

        alert(escreverOla()); // a função vai retornar a string 'Olá, bem vindo(a)' e a mensagem vai sair como um alerta

    ```

- Função sem retorno e com parametros de entrada:
    ```
        function escreverOla(nome){
            alert('Olá, ' + nome + ' bem vindo(a)');
        }

        escreverOla('kamila'); // a função vai passar a string 'Olá, bem vindo(a)'

    ```

# Operadores
Em JavaScript existem operadores dos tipos:
- Aritimeticos;
- Atribuição;
- Comparação;
- Lógica;
- Bit a bit;
## Operadores Aritmeticos
Operação simbolo <br>
Soma + <br>
Subtração - <br>
Multiplicação * <br>
Divisão / <br>
Resto de divisão % <br>
Potenciação ** <br>
### <strong>`Incremento e decremento`</strong> 

- Incremento
    Existem duas formas de incremento em JavaScript, a primeira faz o incremento na variavel antes:
    ```
        let v2 = 1; // v2 com valor de 1
        alert('Mostrando valor de v2: ' +v2);
        alert('Mostrando valor de ++v2: ' + (++v2)); // v2 com valor de v2 = v2 + 1, ou seja v2  = 2
    ```
    O segundo jeito faz o incremento na variavel depois:
    ```
        let v1 = 1; // v1 com valor de 1
        alert('Mostrando valor de v1: ' + v1);
        alert('Mostrando valor de v1++: ' + v1++); // v1 com valor de 1
        alert('Mostrando valor de v1: ' + v1); // v1 com valor de 2
    ```
- Decremento
    Em decremento temos apenas:
    ```
        let v2 = 1; // v2 com valor de 1
        alert('Mostrando valor de v2: ' + v2);
        alert('Mostrando valor de --v2: ' + (--v2)); // v2 com valor de v2 = v2 - 1, ou seja v2  = 0
    ```
## Operadores de Atribuição
Exitem varios operadores de atribuição, para todos os operadores aritméticos existem uma versão para atribuição.
- Atribuição:
    - Podesse usar para atribuir um valor a uma variavel a expressao '`=`', por exemplo: '`x = 5`', atribuimos a variavel '`x`' o valor '`5`'.
- Adição:
    - Ao inves de usar `x = x + 5`, podesse usar `x += 5`. Essas duas versoes tem exatamente o mesmo resultado.
-  Subtração:
    - Ao inves de usar `x = x - 5`, podesse usar `x -= 5`. Essas duas versoes tem exatamente o mesmo resultado.
-  Multiplicação:
    - Ao inves de usar `x = x * 5`, podesse usar `x *= 5`. Essas duas versoes tem exatamente o mesmo resultado.
-  Divisão:
    - Ao inves de usar `x = x / 5`, podesse usar `x /= 5`. Essas duas versoes tem exatamente o mesmo resultado.
-  Potenciação:
    - Ao inves de usar `x = x ** 5`, podesse usar `x **= 5`. Essas duas versoes tem exatamente o mesmo resultado.
-  Resto de divisão:
    - Ao inves de usar `x = x % 5`, podesse usar `x %= 5`. Essas duas versoes tem exatamente o mesmo resultado.

## Operadores de Comparação
O resultado de comparações em JS é do tipo Booleano, ou seja sempre vai ser ou `true` ou `false`.<br>
Existem 6 tipos de operadoes de comparação:
```
    let v = 1;
    alert(v > 1); // false
    alert(v < 1); // false
    alert(v <= 1); // true
    alert(v >= 1); // true
    alert(v === 1); // true
    alert(v !== 1); // false
```
- Maior representado por: <strong> ` > ` </strong>
- Menor representado por: <strong> ` < ` </strong>
- Menor Igual representado por: <strong> ` <= ` </strong>
- Maior Igual representado por: <strong> ` >= ` </strong>
- Igual em tipos e valores representado por: <strong> ` === ` </strong>
- Igual apenas em valores representado por: <strong> ` == ` </strong>
- Diferente representado por: <strong> ` !== ` </strong>

## Operadores de Lógica
Os operadores lógicos são básicamente comparações feitas usando os operadores de comnparação. Se o resultado da comparação foi `true`, uma ação vai ser tomada, caso for `false` uma ação diferente vai ser tomada.<br>
Exemplo 1:
Verificação de Idade:<br>
Uma pessoa para passar de semestre, precisa ter nota >= 7.0. Podemos fazer o seguinte código:
```
let nota = 6;
let verifica = nota >= 7.0 ? 'Aprovado' : 'Reprovado';
alert(verifica); //reprovado
```
Podemos entender a expressão ` nota >= 7.0 ? 'Aprovado' : 'Reprovado'; ` da seguinte forma:<br>
Se a comparação de `nota >= 7.0` for `true` então (?) execute `'Aprovado'` se não (:) execute `'Reprovado'`.

### `Operadores Lógicos com não booleanos`
- `AND` que em JS é representado por `&&`, onde a expressão só vai ser `true` se todas as comparações forem verdadeiras.
    ```
        nota >= 7.0 && nota1 >= 7.0 ? 'Aprovado' : 'Reprovado';
    ```
- `OR` que em JS é representado por `||`, onde a espressão vai ser `true` se no mínimo umas das comparações forem verdadeiras.
    ```
        nota >= 7.0 || nota1 >= 7.0 ? 'Aprovado' : 'Reprovado';
    ```
- NOT que em JS é representado por `!`, onde a espressão vai ser `true` se ela for `false`. E quando a expressão for `false`, passara a ser `true`.
    ```
        !(nota >= 7.0 || nota1 >= 7.0) ? 'Aprovado' : 'Reprovado';
    ```
- ### Existem em JS varios valores que representam `Falsy`, esses valores são definidos especificamente para caracteres como `''`, ou em numeros, como `NaN`, outros valores que representam `Falsy`:
    - Undefined;
    - null;
    - 0;
    - false;
    - '';
    - NaN;
    Tudo que for diferente desses valores que correspondem a `Falsy` são então não falsos ou `Trurthy`.
## LÓGICA EM BITS
    Em JS podemos fazer comparações lógicas dom numeros binarios.
    Cada numaro binario tem 8 digitos, cada digito é 1 bit, ou seja tem 8 bits. Os numeros binario são representados apenas por 0 e 1, nenhum outro digito. 
O numero 1 por exemplo em binario é representado por `00000001`, e o número  dois é representado por `00000010`.
A comparação entre numeros binario é feita da seguinte forma: <br>
Colocasse os numeros que devem ser comparados um sobre o outro:<br>
Se a comparação for 1 | 2 (o `OR` da comparação binaria), temos entao:
```
    let n1 = 00000001 // 1
    let n2 = 00000010 // 2

    let resposta = n1 | n2; // respota 3 (em numeros binarios seria 00000011) 
```
Agora se a comparação for 1 & 2 (o & representa o `AND` da comparação binaria), temos entao:
```
    let n1 = 00000001 // 1
    let n2 = 00000010 // 2

    let resposta = n1 & n2; // respota 00000000
```
Pois:
- 1 | 1 = 1;
- 1 | 0 = 1;
- 0 | 1 = 1;
- 0 & 1 = 0;
- 0 & 0 = 0;
- 1 & 1 = 1;

# LOOPS
    Em JS não temos apenas os loops `for`, `do...while`, `while`. Temos mais alguns, citados abaixo.
- ### For...in:
    Este loop tem a seguinte sintaxe:
    ```
        for(let auxiliar in var){
            alert(auxiliar, var[auxiliar]); // ou alert(auxiliar, var.auxiliar);
        }
    ```
    Podemos usar os dois modos para pegar o valor de var. A variavel `var` pode ser um `objeto` ou um `conjunto`.<br>
    O ponto mais importante é que o loop `for in` vai repetir os comandos até todos os valores do conjunto ou objeto forem usados. A variavel `auxiliar` é usada para atribuir um valor de cada vez. <br>
    Usando um vetor:
    ```
        const lista = ['mamao', 'pera', 'abacaxi', 'goiaba', 'kiwi', 'caju'];
        for(let auxiliar in lista){
            alert(' ' + lista[auxiliar] + ' ' + auxiliar); // ou alert(auxiliar, lista.auxiliar);
        }
    ```
    Usando um objeto:
    ```
        const person = {
            name: 'Adam',
            age: 23
        }

        function escreverOla(){
            for(let auxiliar in person){
                alert(auxiliar + ' ' + person[auxiliar]); // ou alert(auxiliar, person.auxiliar);
            }
        }

        escreverOla();;
    ```

- ### For...of
    O loop For...of  é muito parecido com o for...in. O que difere os dois loops é o resultado da variavel auxiliar.<br>
    Sintaxe de for...of com objetos:
    ```
        const lista = ['mamao', 'pera', 'abacaxi', 'goiaba', 'kiwi', 'caju'];
        for(let auxiliar of lista){
            alert(auxiliar); // ou alert(auxiliar, lista.auxiliar);
        }
    ```
    O resultado do código acima é:
    ```
        mamao 
        pera 
        abacaxi 
        goiaba 
        kiwi 
        caju
    ```
    Enquanto o For...in resulta no index/nome dos elementos o loop `for...of resulta no valor que contem a variavel de indice x ou nome y`. <br>
    Mesmo exemplo mas com o For...in:
    ```
        const lista = ['mamao', 'pera', 'abacaxi', 'goiaba', 'kiwi', 'caju'];
        for(let auxiliar in lista){
            alert(auxiliar); // ou alert(auxiliar, lista.auxiliar);
        }
    ```
    O resultado do código acima é:
    ```
        0 
        1
        2
        3
        4
        5
    ```
- ### Break and Continue
    Em JS temos as palavras `break` que na tradução literal temos 'quebrar' e também temos a palavra `continue` que não precisa traduzir. <br>
    - <strong> `Continue` </strong> <br>
        Em um laço de repetição estas palavras podem alterar a logica inicial do loop. <br> Ex.:
        ```
        1    let i = 0;
        2    while(i<10){
        3        if(i % 2 === 0){
        4            i++;
        5            continue;
        6        }
        7        alert(i);
        8        i++;
        9    }
        ```
        Inicialmente sem as linhas de 3 à 6 temos o seguinte resultado:
        ```
        0
        1
        2
        3
        4
        5
        6
        7
        8
        9
        ```
        Mas, com essas linhas temos:
        ```
        1
        3
        5
        7
        9
        ```
        Por que o quando a variacel i for par entra no if, e soma +1 a variavel, e em seguida continua.
    - <strong> `Break` </strong> <br>
        ```
        1    let i = 0;
        2    while(i<10){
        3        if(i > 6) break;
        5        alert(i);    
        6        i++;
        7    }    
        ```
        Inicialmente sem a linha 3 temos o seguinte resultado:
        ```
        0
        1
        2
        3
        4
        5
        6
        7
        8
        9
        ```
        Mas com essas linhas temos:
        ```
        0
        1
        2
        3
        4
        5
        6
        ```
        Por que o quando a variacel i for > 6 entra no if, e o código é `'quebrado'`ou melhor `'parado'`.

# Arrays
- Declarando uma array:
    ```
    const numbers = [3,4];
    ```
- Adicionanado elementos:
    - No fim:
        ```
        numbers.push(5,6);
        ```
    - No meio:
        ```
        numbers.splice(2, 0, 'a', 'b');// indice da posição que vai colocar o elemento, quantos elementos deseja excluir, e elementos que deseja adicionar
        ```
    - No Inicio:
        ```
        numbers.unshift(1,2);
        ```
- Verificando elementos
    - elemeto presente no array:
        ```
            numbers.indexOf('c'); // retorna < 0 para não encontrado e retorna o indice do elemento no array se encontrado
        ```
    - ultima ocorrencia do elemento no array
        ```
            numbers.lastIndexOf(4); // retorna o indice da ultima ocorrencia do elemento no array.
        ```
- verificando elementos de um array de objetos
    - declarando o array:
        ```
        const courses = [
            { id: 1, name: 'a' },
            { id: 2, name: 'b' },
        ];
        ```
    - verificando o array:
        retorna < 0 se não estiver no array, e o indice se estiver.
        ```
        const course = courses.findIndex(function(course){
            return couse.name === 'a';
        });
        ```
        Ou o código abaixo que tem a mesma finalidade do anterior, só é mais simplificado.
        ```
        const course = courses.findIndex(course => couse.name === 'a');
        ```
- Removendo elementos do Array
    - removendo do final
        ```
        alert(numbers.pop()); // remove o ultimo elemento e retorna o valor removido
        ```
    - removendo do inicio
        ```
        alert(numbers.shift()); // remove o primeiro elemento e retorna o valor removido
        ```
    - removendo do inicio
        ```
       numbers.splice(2,3); // indice da posição que vai iniciar no array (2), quantos elementos deseja excluir (3), e elementos que deseja adicionar (nenhum);
        ```
- Removendo todos os elementos do array
    - Se o array não for uma constante
        ```
        let numbers = [1, 2, 3, 4];
        numbers = [];
        ```
    - Tamanho do array;
        ```
        numbers.length = 0;
        ```
    - Usando `splice`
        ```
        numbers.splice(0, numbers.length);
        ```
    - Com um While (não recomendado para arrays grandes)
        ```
        while(numbers.length > 0)
            numbers.pop();
        ```
- Combinando e copiando arrays
    ```
    const uma = [1,2,3];
    const duas = [4,5,6];
    ```
    - Juntando
        ```
        const juntas = uma.concat(duas); // retorna as duas arrays juntas
        ```
        ou
        ```
        const juntas = [...uma, ...duas];
        ```
    - `Slice` Copiando arrays
        ```
        const tres = juntas.slice(2,4); // pega os valores partindo do indice 2 até o indice 4
        const quatro = juntas.slice(); // faz uma copia do array
        ```
        ou
        ```
        const copy = [...uma, 'a', 1, 2, ...duas]; // junta os arrays e copia na ordem colocada
        const copia = [...juntas]; // copia um
        ```
    - A copia de objetos é feita por referencia.
- ForEach
    O `forEach` passa por cada elemento do array e executa o que esta entre parenteses.
    ```
    const numbers = [1,2,3,4];
    numbers.foEachr((number)=> alert(number));
    ```
- Juntando e separando elemento com um array
    - Juntando elementos de um array em uma string
    ```
    const num = [1,2,3,4];
    const juntos = num.join(' vem antes de: '); // transforma os valores do array em uma string.
    ```
    - Separando elementos de uma string em array
    ```
    const frase = 'Uma frase bem aqui';
    const vetor = frase.split(' '); // separou as palavras da frase em elementos de um array
    ```
- Organizando elementos de um array
    - Em ordem crecente (não funciona com objetos)
    ```
    const num = [1,4,0,2];
    const num1 = num.sort();
    ```
    - Em ordem decrescente (não funciona com objetos)
    ```
    const num = [1,4,0,2];
    const num1 = num.reverse();
    ```
    - Com uma função auxiliar (Funciona com objetos)
    ```
    const couses = [
        { id: 1, name: 'Node.js'},
        { id: 2, name: 'javaScript'},
    ];

    couses.sort(function(a,b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })
    ```
- Testando elementos de um Array
    - every(): função onde todos os elementos precisam ser testados e ter um retorno == true.
    ```
    const numbers = [1,-1,2,3];
    alert(numbers.every(function(value){
        return value >= 0;
    }));
    ```
    - some(): função que verifica se ao menos um elemento atende aos criterios desejados, retorna true.
    ```
    const numbers = [1,-1,2,3];
    alert(numbers.some(function(value){
        return value < 0;
    }));
    ```
    - Filter(): testa cada elemento de um array, se retornar positivo, fica no array, se retornar negativo, sai do array.
    ```
    alert(numbers.filter(function(value){
        return value < 0;
    }));
    ```
    - map(): Realiza uma operação com cada elemento, retornando um elemento novo, com valor alterado, ou não.
    ```
    alert(numbers.map(n => n+1));
    ```
    - reduce(): Entra uma matriz, retorna um valor unico, faz uma operação usando todos os valores, e retorna o resultado.
    ```
    alert(numbers.reduce(acmulador, proximo) => {
        return acumulador + proximo;
    }, 0); // 0 zero é o valor inicial paraa operação.
    ```
# Function
- **`Declaração de funçoes`**
    - `Function declaration`: Pode ser chamada **Antes de ser declarada**
        ```
        function walk(){
            alert('caminhando');
        }

        walk();
        ```
    - `Function Expression`: Pode ser chamada apenas **Depois de ser declarada**
        ```
        let run = run(){
            alert('Correndo');
        }
        let correr = run();
        run();
        ``` 
- **`Argumentos em funçoes`**
    Quando uma função é declarada e tem um numero limitado de parametros, mas quando é chamada esta passsando um numero maior de valores, podesse usar o objeto *`arguments`*, que é onde estão todos os valores passados para a função:
    ```
    function sum(a, b){
        let total = 0
        for(let num of arguments)
            total += num;
        alert(total);
    }
    sum(1,2,3,4,5);
    ```
    ou, onde o `...variavel` precisa ser um último argumento.
    ```
    function sum(...args){
        alert(argr.reduce(a, b => a+b));
    }
    sum(1,2,3,4,5);
    ```
- **`Falta de parametros`**
    Caso a função recebe uma quanditdade menor de valores que deve receber, podemos usar:
    ```
    function taxa(principal, rate = 3.5, year = 5){ // isso se esquivale a: rate = rate || 3.5;  year = year || 5; 
        alert(argr.reduce(a, b => a+b));            // se não houver a declaração (...,rate = 3.5, ...) e não for passado nenhum valor
    }                                               // na chamada da função, vai dar erro
    taxa(1000);
    ```
- **`Getters and Setters`**
    ```
    const person = {
        firstName: 'AA',
        lastName: 'BB',

        get fullName(){
            return `${person.firstName} ${person.lastNam}`; 
        },
        set fullName(value){
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };

    person.fullName = 'John Smith';
    alert(person.fullName);
    ```
- **`Tratamento de Erros`**
    Podemos usar um tratamento de erro quando alguma coisa da errada/usuario faz merda
    ```
        const person = {
        firstName: 'AA',
        lastName: 'BB',

        get fullName(){
            return `${person.firstName} ${person.lastNam}`; 
        },
        set fullName(value){
            if(typeof value !== 'string')
                throw new Error('Valeu ie not a string.');
            
            const parts = value.split(' ');
            if(parts.legth !== 2)
                throw new Error('Enter a fist and last name.');

            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };

    try{    
        person.fullName = 'John Smith';
    }
    catch(){
        alert(e);
    }
    alert(person);
    ```
# Anotações
- Usar **`` (crase)** para mostrar strings ao invés de ' ', pois quando usado as crases, a mesnsagem é mostrada exatamente como digitada, respeitando os espaçoes e quebra de linha, ex:
```
    let nome = 'Camila'
    let message = 
    `Hi ${nome},

    My name is Paulina, I'm so happy to meet you!
    Até amanhã, abraço,
    Paulina.`
```
expressóes matematica também são respeitadas, desde que estejam da seguinte forma ${6 + 2}
RESULTADO: 
```
    Hi Camila,
    My name is Paulina, I'm so happy to meet you!
    Até amanhã, abraço,
    Paulina.
```
# Links 
- Biblioteca math, link documentação: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math>
- Documetnação biblioteca String <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String>
- Documentação biblioteca Date <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date>