/*1. Elabore um programa que popule uma matriz com números aleatórios pelo usuário e faça a soma dos valores da matriz. A ordem da matriz deve ser dada pelo usuário.*/
var n1 = [5], resultado=0;
function soma_matriz(n1,resultado) {
    resultado = n1[0] + n1[1] + n1[2] + n1[3] + n1[4];
    return resultado
}

for (var i = 0; i <5; i++) {
    n1[i] = Math.floor(Math.random() * 100) + 1;
    console.log(n1[i]);
}
resultado=soma_matriz(n1,resultado);
console.log(resultado);