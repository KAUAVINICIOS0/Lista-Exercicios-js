/*21. Fazer um algoritmo que leia três notas e mostre: a média das notas, a situação final do aluno
onde aprovado media = 7.*/
var nota = [3], media = 0, i;
function media_nota(nota, media) {
    media = (nota[0] + nota[1] + nota[2]) / 3;
    return media
}
for (i = 0; i < 3; i++) {
    nota[i] = parseInt(prompt("Digite o valor da nota do bimestre: "));
}
media = media_nota(nota, media);
if (media >= 7) {
    console.log("Aprovado");
    console.log("media: " + media);
}
else {
    console.log("reprovado");
    console.log("media: " + media);
}