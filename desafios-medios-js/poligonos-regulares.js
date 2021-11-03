let line = gets().split("\n").shift().split(' ');
let numLados = line[0];
let comprimento = line[1];

const perimetro = (numLados, comprimento) => numLados * comprimento;

print(perimetro(numLados, comprimento));