/**
 * Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios
 * objetos para esta atividade!
 */

let carlos = {
    nome: 'Carlos',
    idade: 19
}

let sophia = {
    nome: 'Sophia',
    idade: 25
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(carlos, 12));
console.log(calculaIdade.apply(carlos, [5]));