/**
 * Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1
 * 
 * Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
 * 
 * Output -> [1, 3, 0, 0, 0, 33, 23, 0]
 * 
 * Input -> []
 * 
 * Output -> -1
 */
const compareNums = e => (e % 2 == 0) && (e !== 0);
const notEmpyte = array => array.length > 0;

function modifyElements(array){
    if(notEmpyte(array)){
        return array.map(e => compareNums(e) ? 0 : e);
    }else{
        return -1;
    }
}

console.log(modifyElements([1, 2, 3, 4, 5]));
console.log(modifyElements([]));