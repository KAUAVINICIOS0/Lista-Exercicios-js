/*4.Construa um programa que leia o número de horas trabalhadas diárias (NH) de um funcionário por um período de 30 dias (ele trabalhou todos os 30 dias) e apresente o salário bruto recebido por ele nesse período, sabendo que o valor do salário é R$ 10,00/hora trabalhada.*/
var nh = 0, hrt = 0, sal = 10, ttl = 0;
function salario(hrt, nh, sal, ttl) {
    hrt = nh * 30;
    ttl = sal * hrt;
    return ttl
}
for (var i = 1; i <= 30; i++) {
    nh = parseInt(prompt("Quantas horas você trabalhou: "));
}
ttl = salario(hrt, nh, sal, ttl);
console.log("O Salario bruto ser de: R$" + ttl);