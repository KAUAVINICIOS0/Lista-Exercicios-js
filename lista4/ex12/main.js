/*12. Faça um algoritmo que leia valores para as variáveis A, B e C e mostre o resultado da seguinte
expressão: ( A B ) *C */

var valor = [3], result = 0, i;
function expressao(valor, result) {
    result = (valor[0]*valor[1]) * valor[2];
    return result
}
for (i = 0; i < 3; i++) {
    valor[i] = parseInt(prompt("Digite o valor do numero: "));
}
result = expressao(valor, result);
console.log("O resultado da expressão é: " + result);