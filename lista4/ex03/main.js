/*3. Faça um algoritmo que receba 10 idades, pesos e alturas, calcule e mostre:
    • A média das idades das 10 pessoas;
    • A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1.50;*/
var contador = 0, media, adicao = 0, i, idade = [10], peso = [10], altura = [10], tot2, porc, tot;
function media_idade(media, adicao, contador) {
    media = adicao / contador;
    return media
}
function porcentagem(porc, tot2) {
    porc = (tot2 * 100) / 10;
    return porc
}
for (i = 0; i < 10; i++) {
    altura = parseInt(prompt("Digite a altura: "));
    peso[i] = parseInt(prompt("Digite o Peso: "));
    idade[i] = parseInt(prompt("Digite a idade: "));
    adicao = adicao + idade[i];
    contador++;
    if (peso[i] >= 90 && altura[i] <= 1.50) {
        tot = tot + 1;
    }
    else
        if ((idade[i] > 9 && idade[i] < 31) && (altura[i] > 1.90)) {
            tot2 = tot2 + 1;
        }
}
porc = porcentagem(porc, tot2);
media = media_idade(media, adicao, contador);
console.log("quantidade de pessoas com mais de 90 kilos e menos que 1.50 de altura: " + tot);
console.log("A média das idades é de: " + media);
console.log("porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1.90" + porc);