/* 1) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira 
prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo 
para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 
7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor do que 5 mostre REPROVADO. */

var prova1 = parseFloat(prompt("Digite a 1° nota:"));
var prova2 = parseFloat(prompt("Digite a 2° nota:"));
var prova3 = parseFloat(prompt("Digite a 3° nota:"));

var mediaFinal = (prova1 * 4 + prova2 * 3 + prova3 * 3) / 10;

if (mediaFinal >= 7) {
    alert("APROVADO");
} else if (mediaFinal >= 5 && mediaFinal < 6) {
    alert("RECUPERAÇÃO");
} else if (mediaFinal < 5) {
    alert("REPROVADO");
}
 console.log(mediaFinal);