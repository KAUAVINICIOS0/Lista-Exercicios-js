/*1. Faça um algoritmo que receba a idade e o peso de 7 pessoas, calcule e mostre: 
    • A quantidade de pessoas com mais de 90 quilos;
    • A média das idades das 7 pessoas.*/
var contador = 0, media, adicao = 0, pesott = 0, i, idade = [7], peso = [7];
function media_idade(media, adicao, contador) {
    media = adicao / contador;
    return media
}
for (i = 0; i < 7; i++) {
    peso[i] = parseInt(prompt("Digite o Peso: "));
    idade[i] = parseInt(prompt("Digite a idade: "));
    adicao = adicao + idade[i];
    contador++;
    if (peso[i] > 90) {
        pesott = pesott + 1;
    }
}
media = media_idade(media, adicao, contador);
console.log("A quantidade de pessoas com mais de 90kg é de: " + pesott);
console.log("A média das idades é de: " + media);