//ARRAY
// let lista = [];

// // console.log(lista);
// // console.log(typeof(lista));

// let frutas = ["banana","pera", "maça"];

// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// frutas.push("uva"); //adiciona um item dentro da variavel frutas
// console.log(frutas);

// frutas.pop(); //retira o último item da lista
// console.log(frutas);

// frutas.sort(); //ordena do A-Z ou do 1-9.
// console.log(frutas);

// frutas.shift(); //retira o primeiro item da lista
// console.log(frutas);

// frutas.unshift("morango"); //adiciona no início da lista
// console.log(frutas);

// frutas.push("carambola");
// frutas.lenght
// console.log(frutas);



// let numbers = [];
// for(let i = 1; i <=5; i++){
//   numbers.push(prompt("Coloque os números"))
// }
// numbers.sort();
// console.log(numbers);



// alunos = [];
// while(alunos.lenght < 5){
//   alunos.unshift(prompt("insira colega"));
// };
// cocnsole.log(alunos);


//++++++++++++++++++++++++ EM OUTRO DIA +++++++++++++++++++++++


//EXEMPLO DE ARRAY // TROCA DE LUGAR ==================

// let times = [];

// times.push("Corinthians");
// console.log(times);

// times[1] = "Palmeiras";
// console.log(times);
// console.log(times.length);

// times[2] = "Vasco";
// console.log(times);

// times[3]= times[1];
// // console.log(times);
// times[1] = times[2];
// // console.log(times);
// times[2] = times[3];
// // console.log(times);
// times.pop();
// console.log(times);



//EXERCICIO 1 ================================

// let numeros = [];
// numeros[0] = parseFloat(prompt("Valor 1: "));
// numeros[1] = parseFloat(prompt("Valor 2: "));

// console.log(numeros);

// function crescente(numeros){
//   if(numeros[1] < numeros[0]){
//     numeros[2] = numeros[0];
//     numeros[0] = numeros[1];
//     numeros[1] = numeros[2];
//     numeros.pop();
//   };
//   return numeros;
// };

// console.log(crescente(numeros));



//EXERCICIO 2 =================================

// let numeros = [];
// numeros[0] = parseFloat(prompt("Valor 1: "));
// numeros[1] = parseFloat(prompt("Valor 2: "));
// numeros[2] = parseFloat(prompt("Valor 3: "));


// console.log(numeros);

// function crescente(numeros) {
//   if (numeros[1] < numeros[0]) {
//     numeros[3] = numeros[0];
//     numeros[0] = numeros[1];
//     numeros[1] = numeros[3];
//     numeros.pop();
//   };
//   if (numeros[2] < numeros[0]) {
//     numeros[3] = numeros[0];
//     numeros[0] = numeros[2];
//     numeros[2] = numeros[3];
//     numeros.pop();
//   };
//   if (numeros[2] < numeros[1]) {
//     numeros[3] = numeros[1];
//     numeros[1] = numeros[2];
//     numeros[2] = numeros[3];
//     numeros.pop();
//   };
//   return numeros;
// };

// console.log("Colocando em ordem crescente!!");
// console.log(crescente(numeros));



//INVERTENDO OS NÚMEROS DENTRO DA LISTA // EXERCÍCIO 2 ========

// let lista = [];
// let quantidade = parseFloat(prompt("Quantos números quer colocar?"));

// for (let i = 0;i < (quantidade);i++){
//   lista[i] = parseFloat(prompt("Número: "));
// };

// console.log(lista);

// console.log("!!!!!===== INVERTENDO =====!!!!!");
// console.log("!!!!!===== ODNETREVNI =====!!!!!");

// lista.reverse();
// console.log(lista);



// EXERCÍCIO 3 ======================================

// let inteiro = parseInt(prompt("Coloque um número inteiro: "));
// let resultado;

// let lista = [];
// lista[0] = inteiro;

// for(let i = 1; i < 10; i++){
//   lista[i] = inteiro + inteiro;
//   resultado = inteiro + inteiro;
//   console.log(final(resultado));
// };

// function final(resultado){
//   resultado++
//   return resultado;
// };

// console.log(final(resultado));



//EXERCÍCIO 4 ============================================

function Inverte(vetor){
  let vetorInvertido = [];
  for(let i = 1; i <= vetor.length; i++){
    vetorInvertido.push(vetor[vetor.length - i])
  };
  return vetorInvertido
};

let test = ["Maria", "Joana", "Lúcia"];
Inverte(test);

console.log(Inverte(test));

test = ["Maria", "Joana", "Lúcia", "Marcia"];
Inverte(test);

console.log(Inverte(test));

test = [6,5,4,3,2,1];
Inverte(test);

console.log(Inverte(test));