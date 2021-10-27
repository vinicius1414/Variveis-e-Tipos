const FIRST_NAME = "Vinicius"; 
// Devemos declarar a constante em Uppercase, separando as palavras com um Underline

FIRST_NAME = "João";
// O código apresentará um erro, pois uma const não pode ter seu valor reatribuido


SECOND_NAME = "da Silva";

const SECOND_NAME;

console.log(SECOND_NAME);
// O Código apresentará um erro, pois o hoisting não pode ser com const, apenas com uma var
// Hoisting: (atribuir um valor antes de declarar a const) 
