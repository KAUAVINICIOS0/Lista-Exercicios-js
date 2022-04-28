/*20. Construa um programa que leia as informações de: horas trabalhadas (HT), valor da hora trabalhada (VH). Calcule e apresente o salário líquido dos empregados da empresa, baseado nas tabelas abaixo.
OBS: Salário Líquido = Salário Bruto – INSS – Imposto de Renda
a) INSS = 11% do salário bruto
b) Imposto de Renda  após descontar o INSS usar esse valor e ler a alíquota do imposto de renda na tabela abaixo:
Não é conhecido o número de funcionários da empresa. Ao final de cada cálculo, o programa deve perguntar se a pessoa deseja calcular o salário de outro funcionário. Caso a resposta seja negativa, o programa deve parar.*/
function salario_liquido(salario_bruto, inss, imposto) {
    salario_liquido0 = salario_bruto - inss - imposto;
    return salario_liquido0
}
function inss(salario_bruto) {
    inss0 = salario_bruto * 11 / 100;
    return inss0
}
function salario_bruto(hora_trabalhada, valor_hora, salario_bruto0) {
    salario_bruto0 = hora_trabalhada * valor_hora;
    return salario_bruto0
}
var salario_bruto0, inss0, valor_hora, hora_trabalhada, aliquota, deduzir, imposto, salario_liquido0, opcao;

do {
    hora_trabalhada = parseInt(prompt("Quantas horas foram trabalhadas: "));
    valor_hora = parseInt(prompt("Qual o valor da hora: "));
    salario_bruto0 = salario_bruto(hora_trabalhada, valor_hora, salario_bruto0);
    console.log("O salario bruto será de: " + salario_bruto0);
    if (salario_bruto0 < 900) {
        aliquota = 0;
        deduzir = 0;
    }
    else if ((salario_bruto0 >= 900) && (salario_bruto0 <= 1800)) {
        aliquota = 15 / 100;
        deduzir = 135;
    }
    else {
        aliquota = 27.5 / 100;
        deduzir = 360;
    }
    inss0 = inss(salario_bruto0);
    imposto = aliquota * (salario_bruto0 - inss0) - deduzir;
    salario_liquido0 = salario_liquido(salario_bruto0, inss0, imposto);
    console.log("O seu salario após os impostos cobrados será de: " + salario_liquido0);
    opcao = parseInt(prompt("Deseja continuar para saber do proximo funcionario: (1)Sim (2)Não: "));

} while (opcao == 1);