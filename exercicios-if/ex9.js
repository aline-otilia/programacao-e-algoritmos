/* 9) Elabore um algoritmo que leia o ano de nascimento do usúrio e informe se ele pode ou não votar. Faça
uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo. */

var anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));

var eleitor = 2022 - anoNascimento;

if (eleitor < 15) {
    alert(" Proibido Votar ");
} else if (eleitor >= 16 && eleitor < 18 || eleitor >= 65) {
    alert(" Facultativo ");
} else if (eleitor >= 18 && eleitor < 65) {
    alert(" Obrigatório ");
}