/*9. Construa um programa que leia o conjunto de 20 números inteiros e mostre qual foi o maior e
o menor valor fornecido.*/
function M4(n1, n2) {
    if (n1 < n2) {
        n1 = n2;
    }
    return n1
}
function M3(n2, n3) {
    if (n2 < n3) {
        n3 = n2;
    }
    return n3
}
var n1, n2, n3;
n1 = parseInt(prompt("Digite um numero: "));
n3 = n1;
for (n = 2; n <= 5; n++) {
    n2 = parseInt(prompt("Digite outro numero: "));
    if (n2 > n1) {
        n1 = n2;
    } else if (n2 < n3) {
        n3 = n2;
    }
}
console.log("Maior " + M4(n1, n2));
console.log("Menor " + M3(n1, n3));