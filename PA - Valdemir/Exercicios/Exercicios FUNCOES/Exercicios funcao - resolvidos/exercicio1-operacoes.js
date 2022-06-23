/* 
    1.	Faça um programa, usando funções, que realize todas as 
       operações básicas: soma, subtração, multiplicação, divisão.
*/

var n1 = parseInt(prompt("Digite o primeiro número"));
var n2 = parseInt(prompt("Digite o segunto número"));

console.log("Soma: " + soma(n1, n2));
console.log("Subtração: " + subtrai(n1, n2));
console.log("Multiplicação: " + multiplica(n1, n2));
console.log("Divisão: " + divide(n1, n2));

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtrai(numero1, numero2) {
    return numero1 - numero2;
}

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

function divide(numero1, numero2) {
    return numero1 / numero2;
}