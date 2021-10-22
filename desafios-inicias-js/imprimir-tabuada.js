let N = gets();

const multiplicar = (a, b) => a * b;

function tabuada(N) {
  for(let i = 1; i <= 10; i++){
    print(`${i} x ${N} = ${multiplicar(i, N)}`);
  }
}

tabuada(N);