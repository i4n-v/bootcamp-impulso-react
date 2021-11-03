let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (inicio >= 3 && (final <= 96 && final > inicio)) {
    print('crescente');
} else if (inicio < final && final <= 100) {
    print('cheia');
} else if ((inicio >= 96 || inicio > final) && (final >= 3 || final <= 3)) {
    print('minguante');
}