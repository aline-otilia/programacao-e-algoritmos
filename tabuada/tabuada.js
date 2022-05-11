var tabuada = parseInt(prompt("Digite o número: "));
var infinito = parseInt(prompt("Limite da tabuada: "));

for (let i = 0; i <= infinito; i++) {
    let multiplicacao = tabuada + " x " + i;
    let resultado = tabuada * i;
    console.log(multiplicacao + '=' + resultado);
}