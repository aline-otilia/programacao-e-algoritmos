/* 8) Elabore um algoritmo que dada a idade de um nadador, classifica-o em uma seguintes categorias:
	Infantil A --> 5 a 7 anos
	Infantil B --> 8 a 10 anos
	Juvenil A  --> 11 a 13 anos
	Juvenil B  -- 14 a 17 anos
	Adulto     --> Maior ou igual a 18 anos.*/

var idade = parseInt(prompt(" Informe a idade do nadador:"));

if (idade >= 5 && idade <= 7) {
    alert("Nadador " + idade + " anos" + "\n Categoria: Infantil A");
} else if (idade >= 8 && idade <= 10) {
    alert("Nadador " + idade + " anos" + "\n Categoria: Infantil B");
} else if (idade >= 11 && idade <= 13) {
    alert("Nadador " + idade + " anos" + "\n Categoria: Juvenil A");
} else if (idade >= 14 && idade <= 17) {
    alert("Nadador " + idade + " anos" + "\n Categoria: Juvenil B");
} else if (idade >= 18) {
    alert("Nadador " + idade + " anos" + "\n Categoria: Adulto");
} else if (idade < 5) {
    alert("Nadador " + idade + " anos" + "\n SEM CADASTRO");
}