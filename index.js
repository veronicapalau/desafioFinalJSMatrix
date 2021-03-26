/*Faça uma calculadora com as 4 operações básicas, todas organizadas em funções
onde o utilizador possa definir uma operação da seguinte forma:
calc (valor1, operador, valor2) (2, '+', 5), 
onde 2 é o valor1, '+' é o operador e 5 é o valor2.
Faça uma versão usando estrutura condicional (if, else) e 
outra versão sem usar nenhuma estrutura condicional.*/
function calculadora(valor1, operador, valor2) {
  if (operador === "+") {
    return valor1 + valor2;
  } else if (operador === "-") {
    return valor1 - valor2;
  } else if (operador === "*") {
    return valor1 * valor2;
  } else if (operador === "/") {
    return valor1 / valor2;
  } else {
    return console.log("Operador não identificado");
  }
}
console.log(calculadora(10, "+", 2));
console.log(calculadora(10, "-", 2));
console.log(calculadora(10, "*", 2));
console.log(calculadora(10, "/", 2));
