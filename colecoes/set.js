/**
 * Atividade 2: Sets
 * Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
 */

let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array){
    let set = new Set(array);
	return [...set];
}

console.log(uniqueValues(array));