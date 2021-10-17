/**
 * Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
 * Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa 
 * (ex.:raiar, ama, ovo, radar)
 */


//Option 1:

const strReverse = str => str.split('').reverse().join('');
const isPalidromo1 = str => str === strReverse(str);

console.log(isPalidromo1('ovo'));

// Option 2:

function isPalidromo2(str){
    let reverseStr = str.split('').reduce((acc, caracter) => {
        return caracter.concat(acc)
    })

    return str === reverseStr;
}

console.log(isPalidromo2('ana'));