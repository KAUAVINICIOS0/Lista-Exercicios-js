/*16. Anacleto tem 1,50m e cresce 2 centímetros por ano, enquanto Felisberto tem 1,10 e cresce 3 centímetros por ano. Construa um programa que calcule e apresente quantos anos serão necessários para que Felisberto seja maior que Anacleto.*/
var anacleto0 = 1.50, centi1 = 0.02, felisberto0 = 1.10, centi2 = 0.03, anos = 1;
function hight(anacleto0, centi1, felisberto0, centi2) {
    do {
        anacleto0 = anacleto0 + centi1;
        felisberto0 = felisberto0 + centi2;
        anos++;
    } while (felisberto0 < anacleto0);
    return anos
}
anos = hight(anacleto0, centi1, felisberto0, centi2);
console.log("Serão necessários: " + anos + " anos");