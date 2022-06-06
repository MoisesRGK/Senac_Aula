let nome
let anoEmpresa
let idade
let cargo
let salario
let salarioFinal

function Gerente(anoEmpresa) {
  salario = parseFloat(4800);
  salarioFinal = parseFloat(salario * (anoEmpresa / 70 + 1)).toFixed(2);
  return salarioFinal;
};

function Vendedor(anoEmpresa) {
  salario = parseFloat(2900);
  salarioFinal = parseFloat(salario * (anoEmpresa * 3 / 50 + 1)).toFixed(2);
  return salarioFinal;
};

function Tesoureiro(anoEmpresa) {
  salario = parseFloat(3200);
  salarioFinal = parseFloat(salario * (anoEmpresa / 10 + 1.2)).toFixed(2);
  return salarioFinal;
};

function Desenvolvedor(anoEmpresa) {
  salario = parseFloat(5100);
  salarioFinal = parseFloat(salario * (anoEmpresa ** 2 / 120 + 1)).toFixed(2);
  return salarioFinal;
};

for (let i = 1; i <= 5; i++) {
  nome = prompt("Qual seu nome?");
  anoEmpresa = parseFloat(prompt("Há quantos anos trabalha na empresa?"));
  idade = prompt("Qual sua idade");
  console.log("1 - Gerente");
  console.log("2 - Vendedor");
  console.log("3 - Tesoureiro");
  console.log("4 - Desenvolvedor");
  cargo = prompt("Qual seu cargo na empresa?");
  console.log("");
  
  console.log("#####SALÁRIO#####");
  console.log("Nome: " + nome);
  console.log("Trabalha há " + anoEmpresa + " na empresa");
  console.log("Idade: " + idade);
  if (cargo == "1") {
    console.log("Salário de ", Gerente(anoEmpresa));
    console.log("Cargo: Gerente");
  } else if (cargo == "2") {
    console.log("Salário de ", Vendedor(anoEmpresa));
    console.log("Cargo: Vendedor");
  } else if (cargo == "3") {
    console.log("Salário de ", Tesoureiro(anoEmpresa));
    console.log("Cargo: Tesoureiro");
  } else if (cargo == "4") {
    console.log("Salário de ", Desenvolvedor(anoEmpresa));
    console.log("Cargo: Desenvolvedor");
  }else{
    console.log("!!!Ínvalido!!!")
  }
  console.clear();
};