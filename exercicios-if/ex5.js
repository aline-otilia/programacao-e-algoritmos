// 5) Elabore um algoritmo que leia valores inteiros e mostre o maior valor entre eles.

valor1 = parseInt(prompt("Digite o primeiro valor: "));
valor2 = parseInt(prompt("Digite o segundo valor: "));
valor3 = parseInt(prompt("Digite o terceiro valor: "));

if (valor1 > valor2 && valor1 > valor3) {
    alert("O maior valor é o primeiro: " + valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
    alert("O maior valor é o segundo: " + valor2);
} else if (valor3 > valor1 && valor3 > valor2) {
    alert("O maior valor é o terceiro: " + valor3);
}