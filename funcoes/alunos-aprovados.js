/**
 * Atividade 1: Alunos Aprovados
 * Crie uma função que recebe o array alunos e um número que irá representar a média final;
 * Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média 
 * final;
 * Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
 */

function alunosAprovados(alunos, medFinal){
    let aprovados = alunos.filter(aluno => {
        let {media} = aluno;
        return media >= medFinal;
    });

    return aprovados;
}

let alunosObj = [
    {
        nome: 'Carlos',
        media: 8
    },
    {
        nome: 'Maria',
        media: 5
    },
    {
        nome: 'Andrew',
        media: 6
    },
    {
        nome: 'Sophia',
        media: 10
    }
];

console.log(alunosAprovados(alunosObj, 7));