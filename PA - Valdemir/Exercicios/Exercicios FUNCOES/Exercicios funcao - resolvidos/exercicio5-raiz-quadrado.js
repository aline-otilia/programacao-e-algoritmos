/* 
    5. Faça um programa, usando uma função que calcule a raiz
       quadrada de um número.
*/
var numero = parseInt(prompt("Digite o número"));

console.log("Raiz quadrada de " + numero + " é " + 
    calculaRaizQuadrada(numero));

function calculaRaizQuadrada(numero) {
    return Math.sqrt(numero);
}