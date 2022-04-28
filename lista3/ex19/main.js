/*19. Uma rede de cinema contratou você para elaborar uma pesquisa sobre o filme da Marvel: “Viúva Negra”. Os entrevistados devem responder as seguintes perguntas: 
    1) Qual a sua idade? 
    2) Qual o seu sexo? 
    1 – Masculino; 2 – Feminino 
    3) O que você achou do filme? 
    1 – Excelente; 2 – Bom; 3 – Regular; 4 – Péssimo 
    A pesquisa termina quando o usuário digitar ZERO na idade. Após encerrar a pesquisa deverá ser exibido: 
    1) Número total de entrevistados 
    2) Quantidade de pessoas do sexo masculino que responderam à pesquisa; 
    3) Quantidade de pessoas do sexo feminino que responderam à pesquisa; 
    4) Porcentagem de pessoas do sexo masculino que responderam à pesquisa; 
    5) Porcentagem de pessoas do sexo feminino que responderam à pesquisa; 
    6) A média de idade das pessoas que responderam à pesquisa; 
    7) As porcentagens de pessoas que responderam Excelente; 
    8) As porcentagens de pessoas que responderam Bom; 
    9) As porcentagens de pessoas que responderam Regular; 
    10) As porcentagens de pessoas que responderam Péssimo; */
var media_id, id, cont = 0, soma_id = 0, cont_a = 0, cont_b = 0, cont_c = 0, cont_d = 0, cont_e = 0, pc_a, pc_b, pc_c, pc_d, pc_e, sexo, sm = 0, sf = 0, mediasm = 0, mediasf = 0, op;

function media_idade(media_id, soma_id, cont) {
    media_id = (soma_id / cont);
    return media_id
}

function sexo_masculino(mediasm, sm, cont) {
    mediasm = (100 * sm) / cont;
    return mediasm
}
function sexo_feminino(mediasf, sf, cont) {
    mediasf = (100 * sf) / cont;
    return mediasf
}

function otimo(pc_a, cont_a, cont) {
    pc_a = 100 * cont_a / cont;
    return pc_a
}
function bom(pc_b, cont_b, cont) {
    pc_b = 100 * cont_b / cont;
    return pc_b
}
function regular(pc_c, cont_c, cont) {
    pc_c = 100 * cont_c / cont;
    return pc_c
}
function pessimo(pc_d, cont_d, cont) {
    pc_d = 100 * cont_d / cont;
    return pc_d
}

do {
    if (cont == 0) {
        id = parseInt(prompt("Digite sua idade: "));
    }
    else {
        id = parseInt(prompt("Digite sua idade: "));
    }
    if (id > 0) {
        sexo = parseInt(prompt("Qual o seu sexo? 1-Masculuno 2-Feminino: "));
        if (sexo == 1) {
            sm = sm + 1;
        } else {
            sf = sf + 1;
        }
        op = parseInt(prompt("Qual sua opinião sobre o filme. (1) Ótimo, (2) Bom, (3) Regular, (4) Péssimo"));

        switch (op) //contagem de cada alternativa
        {
            case 1:
                cont_a = cont_a + 1;
                break;
            case 2:
                cont_b = cont_b + 1;
                break;
            case 3:
                cont_c = cont_c + 1;
                break;
            case 4:
                cont_d = cont_d + 1;
                break;
        }
        cont = cont + 1;
        soma_id = soma_id + id;
    }
} while (id > 0);
media_id = media_idade(media_id, soma_id, cont);
mediasm = sexo_masculino(mediasm, sm, cont);
mediasf = sexo_feminino(mediasf, sf, cont);
pc_a = otimo(pc_a, cont_a, cont);
pc_b = bom(pc_b, cont_b, cont);
pc_c = regular(pc_c, cont_c, cont);
pc_d = pessimo(pc_d, cont_d, cont);


console.log("Total de participantes: " + cont);
console.log("Media das idades é: " + media_id);
console.log("A porcentagem de otimo: " + pc_a + "%");
console.log("A porcentagem de bom: " + pc_b + "%");
console.log("A porcentagem de regular: " + pc_c + "%");
console.log("A porcentagem de pessimo: " + pc_d) + "%";
console.log("Quantidade de hoemens: " + sm);
console.log("Quantidade de mulheres: " + sf);
console.log("Porcentagem do sexo masculino: " + mediasm + "%");
console.log("Porcentagem do sexo feminino: " + mediasf + "%");