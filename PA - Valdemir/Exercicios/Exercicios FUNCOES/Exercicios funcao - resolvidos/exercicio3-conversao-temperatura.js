/* 
    3.	Faça um programa, usando uma função que converta 
    uma temperatura de Celsius para Fahrenheit.
*/
var celsius = parseInt(prompt("Digite a temperatura em graus celsius"));

console.log(celsius + "ºC equivale a " + 
    converteCelsiusParaFahrenheit(celsius) + "ºF");

function converteCelsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}