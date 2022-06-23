/* 
    2.	Faça um programa, usando uma função, para calcular a 
        porcentagem de um número. 
*/
var numero = parseInt(prompt("Digite o número"));
var porcentagem = parseInt(prompt("Digite a porcentagem"));

console.log(porcentagem + "% de " + numero + " é " + 
    calculaPorcentagem(numero, porcentagem));

function calculaPorcentagem(numero, porcentagem) {
    return numero * (porcentagem/100);
}