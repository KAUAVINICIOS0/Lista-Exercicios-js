/*7. Construa um programa que calcule N! (fatorial de N), sendo que o valor de N (inteiro) é fornecido pelo usuário. Sabe-se que: N! = 1 x 2 x 3 x 4 x .... x N
//OBS: 0! = 1 (fatorial do número zero é igual a 1 por definição).*/
var h = 1, n;
function mult(h) {
    if (h == 0) {
        h = 1;
        return h
    }
    else {
        return h
    }
}
n = parseInt(prompt("Qual o valor de N: "));
for (var i = 1; i <= n; i++) {
    h = i * h;
}
h = mult(h, i);
console.log(h)