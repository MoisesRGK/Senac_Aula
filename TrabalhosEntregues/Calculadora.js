function Soma() {
  let soma = n1 + n2;
  return soma;
};

function Subtraçao() {
  let subtracao = n1 - n2;
  return subtracao;
};

function Multiplicaçao() {
  let multiplicaçao = n1 * n2;
  return multiplicaçao;
};

function Divisao() {
  let divisao = n1 / n2;
  return divisao;
};

let n1
let n2
let continua = true

while (continua) {
  console.log("CALCULADORA");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");
  console.log("5 - Sair");
  let opcao = parseFloat(prompt("Opção: "));
  if (opcao == "5") {
    continua = false
  }else {
    n1 = parseFloat(prompt("Valor 1: "));
    n2 = parseFloat(prompt("Valor 2: "));
    if (opcao == "1") {
      console.log(Soma(n1, n2));
    } else if (opcao == "2") {
      console.log(Subtraçao(n1, n2));
    } else if (opcao == "3") {
      console.log(Multiplicaçao(n1, n2));
    } else if (opcao == "4") {
      console.log(Divisao(n1, n2));
    } else {
      console.log("Opção ínvalida!");
    };
  };
};