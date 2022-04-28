/*2. Construa um programa que leia a quantidade (Q) e o preço (PR) de 45 produtos diferentes, comprados por uma empresa, e apresente o total gasto por ela.*/
var q = 0, pr = 0, total = 0;
function preco(total, q, pr) {
    total = total + (q * pr);
    return total
}
for (var i = 1; i <= 5; i++) {
    q = parseInt(prompt("Qual a quantidade"));
    pr = parseInt(prompt("Qual o valor"));
}
console.log("total gasto: "+ preco(total, q, pr));