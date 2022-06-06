let valorMin = parseFloat(prompt("Insira o valor 1: "));

for(let i = 2; i <= 5; i++){
  let novoValor = parseFloat(prompt("Insira o valor: " + i));
  if(novoValor > valorMin){
    valorMin = novoValor
  };
};
console.log(valorMin)