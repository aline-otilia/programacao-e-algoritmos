var tabuada = parseInt(prompt("Digite o número da tabuada"));
var valorMaximo = parseInt(prompt("Digite o valor máximo"));

for (var i = 0; i <= valorMaximo; i++) {
    console.log(tabuada + " x " + i + " = " + (tabuada * i));
}