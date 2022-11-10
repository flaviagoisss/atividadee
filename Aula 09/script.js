//tipos de função
//função declarativa
/*deve ser declarada usando a palavra reservada fuction seguida do nome da função,parenteses"()" e chaves "()"*/

function nomeDaFuncao(){
    alert('sou uma função declarativa!');
}
//deve chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atribuídas à expressões 
// a nomeação é opcional 

// com nomeação:
var nomeDeFuncao = function nomeDaFuncao() {
    alert('Sou uma expressão de função nomeada!');
}
// sem nomeação:
var nomeDeFuncao2 = function() {
    alert('Sou uma expressão não nomeada!')
}
// ARROW FUNCTION
/* 
Função de expressão de sintaxe curta, sempre anônima, não pode ser nomeada 
- Deve ser declara com parênteses "()", seguido de "=>" e depois "{}"
*/
var funcao = () => {
    alert('Sou uma função anônima!')
}

nomeDeFuncao();
nomeDeFuncao2();
funcao();