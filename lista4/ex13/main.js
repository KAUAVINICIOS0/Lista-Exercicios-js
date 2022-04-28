/*13. Faça um algoritmo que mostre o resultado da expressão abaixo: (( x 5) *y) z Obs: Ler valores 
   para as variáveis x, y e z.*/
   
    //professor não consegui compreender essa expressão logo eu fiz do jeito que eu interpretei

   var valor = [3], result = 0, i;
function expressao(valor, result) {
    result = ((valor[0] * valor[0] * valor[0] * valor[0] * valor[0]) * valor[1]) * valor[2];
    return result
}
for (i = 0; i < 3; i++) {
    valor[i] = parseInt(prompt("Digite o valor do numero: "));
}
result = expressao(valor, result);
console.log("O resultado da expressão é: " + result);