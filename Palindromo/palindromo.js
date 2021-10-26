// Solução 1

function verificaPalindromo(string){
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
    /* Método split("") separa a colocar um espaço entre caráctere, e o tornará em um Array.
       Método reverse() inverte a ordem desses carácteres.
       Método join("") uni todos esses carácteres
       === string verifica se o valor invertido é igual ao valor original.
    */
}

console.log(verificaPalindromo("ama"));


// Solução 2


function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;
    // se string for nula ou indefenida, a função para!

	for (var i = 0; i < string.length / 2; i++) {
    // loop: var i for menor que o tamanho de 'asa' / 2, i será += 1
    
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');