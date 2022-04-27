/* 10) Um banco concederá um crédito especial aos seus clientes variável com o saldo médio no último ano.
Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo.
Mostre uma mensagem informando o saldo médio e o valor do crédito.
	De 0 e 200   --> Nenhum crédito
	De 201 a 400 --> 20% do valor do saldo médio 
	De 401 a 600 --> 30% do valor do saldo médio
	Acima de 601 --> 40% do valor do saldo médio */

var saldoMedio = parseFloat(prompt(" Saldo médio:"));



if (saldoMedio >= 0 && saldoMedio <= 200) {
    alert("Saldo médio: " +saldoMedio+ "\n Nenhum crédito");
} else if (saldoMedio >= 201 && idade <= 400) {
    alert("Saldo médio: " +saldoMedio+ "\n 20% do valor do crédito");
} else if (saldoMedio >= 401 && idade <= 600) {
    alert("Saldo médio: " +saldoMedio+ "\n30% do valor do crédito");
} else if (saldoMedio >= 601) {
    alert("Saldo médio: " +saldoMedio+ "\n30% do valor do crédito");
} 