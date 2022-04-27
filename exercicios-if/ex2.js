// 2) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.

var ano = parseInt(prompt("Digite o ano : "));

if (ano % 4) {
    alert(" Não é um ano bissexto ");
} else {
    alert(" É um ano bissexto ");
}
