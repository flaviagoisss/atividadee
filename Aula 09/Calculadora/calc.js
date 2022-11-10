// criando uma calculadora 
function calculadora() {
    // deifinindo as operações e pegando valor de entrada do usuário 
    // usaremos o "/n"
    const operacao = Number(prompt('Escolha uma opção: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - multiplicação(*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    if (!operacao || operacao >= 7 ) {
        alert('Erro - Operação Inválida! ')
        calculadora();
    } else {
        // definindo variáveis - todas as entradas devem ser tipo number 
        let n1 = Number(prompt('Insira o primeiro valor: '))
        let n2 = Number(prompt('Insira o segundo valor: '))
        let resultado;
    // verificando se as variáveis são válidas
    if (!n1 || !n2) {
        alert('Erro - Parâmetros Inválidos!');
        calculadora();
    } else {
         // definindo as funções
         function soma() {
             resultado = n1 + n2;
             // mostrando o resultado usando template strings
             alert(`${n1} + ${n2} = ${resultado} `);
             // dando a opção de chamar uma nova operação 
             novaOperacao();
         }
         function subtracao() {
            resultado = n1 - n2;
            // mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado} `);
            // dando a opção de chamar uma nova operação 
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            // mostrando o resultado usando template strings
            alert(`${n1} * ${n2} = ${resultado} `);
            // dando a opção de chamar uma nova operação 
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            // mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado} `);
            // dando a opção de chamar uma nova operação 
            novaOperacao();
        }
        function divisaoInteira() {
             resultado = n1 % n2;
             // mostrando o resultado usando template strings
             alert(`${n1} + ${n2} = ${resultado} `);
             // dando a opção de chamar uma nova operação 
             novaOperacao();
         }
         function potenciacao() {
            resultado = n1 ** n2;
            // mostrando o resultado usando template strings
            alert(`${n1} elevado à ${n2}ª potência é ${resultado} `);
            // dando a opção de chamar uma nova operação 
            novaOperacao();
        }
        // nova operacao
        function novaOperacao(){
            let opcao = prompt('deseja fazer outra operação?/1 - sim/n 1 -');
            if (opcao == 1){
                calculadora();
            }else if (opcao == 2){
                alert('ate mais!');
            }else{
                alert('digite uma opcao valida!');
                novaOperacao
            } 

            }
        }
      }
    
    //escolhendo uma operação
    //usando if && else
    /*
    if (operacao == 1){
        soma();    

    }else if (operacao == 2){
    subtração();
    }else if (operacao == 3){
    multiplicação();
     }else if (operacao == 4){
    divisaoreal();
    }else if (operacao == 5){
     divisaoInteira();
   }else if (operacao == 6){
    potenciaçao();    

}*/


//usando switch case como alternativa (comentar um dos dois)

switch (operacao){
    case 1:
            soma();
            break;
     case 2:
            subtracao();
            break;  
     case 3:
           divisaoReal();
            break;
     case 4:
             divisaoInteira();
            break;
     case 5:
            multiplicacao();
            break;
    case 6:
           potenciacao ();
            break;                                      
    }
}
calculadora();
























