/** 
 * Crie uma função que recebe dois números como parâmetros.
 * Confira se os números são iguais.
 * Confira se a soma dos números é maior que 10 ou menor que 20.
 * Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e 
 * maior/menor que 20".
 * Exemplo:
 * 
 * Input: 1, 2
 * Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
 *  
 */

const equalsNum = (a, b) => a == b;
const greaterThanTen = a => a > 10;
const greaterThanNine = a => a > 20;

function confirmNum(a, b){
    let sum = a + b;
    let strRes = equalsNum(a, b) ? `Os números ${a} e ${b} são iguais. `: `Os números ${a} e ${b} não são iguais. `;
    strRes += `Sua soma é ${sum}, que é `;
    strRes += greaterThanTen(sum) ? 'maior que 10 ' : 'menor que 10 ';
    strRes += greaterThanNine(sum) ? 'e maior que 20.' : 'e menor que 20.';

    return strRes;
}

console.log(confirmNum(20, 20));