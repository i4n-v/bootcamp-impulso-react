let salario = gets();

function calcularImposto(valor) {

    let imposto = 0;
    let salario = valor;

    if (salario > 4500.00) {
      imposto = 1000 * 0.08 + 1500 * 0.18;
      diferenca = valor - 4500;
      imposto += diferenca * 0.28;
    } else if (salario > 3000.00) {
      imposto = 1000 * 0.08;
      diferenca = valor - 3000;
      imposto += diferenca * 0.18;
    } else if (salario > 2000.00) {
      diferenca = valor - 2000;
      imposto = diferenca * 0.08;
    }
    
    return imposto;

}

let resultado = calcularImposto(salario);
let str = (resultado === 0) ? "Isento" : "R$ " + resultado.toFixed(2);
print(str);