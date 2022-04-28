/*6. Construa um programa que apresente o valor de H, sendo H calculado por: H = 1 + 2 + 3 + 4 + ... + N	O valor de N será apresentado pelo usuário.*/
var h = 0, n;
function soma(h, n) {
    h = h + n;
    return h
}
n = parseInt(prompt("Qual o valor de N: "));
for (var i = 1; i < n; i++) {
    h = i + h;
}
h = soma(h, n);
console.log("" + h);	