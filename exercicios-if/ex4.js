// 4) Elaborar um algoritmo que lê valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".

var valorA = parseInt(prompt("Digite o valor de A: "));
var valorB = parseInt(prompt("Digite o valor de B: "));

if (valorA % valorB && valorB % valorA) {
    alert("Não são múltiplos ");
} else {
    alert(" São múltiplos ");
}