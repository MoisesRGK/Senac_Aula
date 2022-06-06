// DEFINIÇÃO DE VARIÁVEIS
// const == não muda depois == constante
/*const pi = 3.1415926535;
console.log(pi);
pi = 3;*/
{
  //let copo = "cházinho";
  // console.log(copo);
};



// LAÇOS DE REPETIÇÃO
/*let idade = 15;
idade++;
  console.log(idade)*/
/*for(idade = 0; idade < 18; idade++);
  console.log(idade);*/



// let passo;
// for(let passo = 0; passo < 5; passo++){
//   console.log("De um passo para o leste.")
//   console.log(passo)
// };
//  console.log(passo);



// for(let numero = 10; numero > 0; numero--){
//   var respostaUsuario = prompt("Qual é o dobro de " + numero + "?")
// };
// console.log(respostaUsuario)


/*EXERCÍCIO DE BIMESTRES 1(MEU)

let nota1 = parseFloat(prompt("Qual foi a nota no primeiro bimestre?"));
let nota2 = parseFloat(prompt("Qual foi a nota do segundo?"));
let nota3 = parseFloat(prompt("E do terceiro?"));
let nota4 = parseFloat(prompt("E do quarto?"));

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("A média final é " + media);

if(media > 60){
  console.log("Parabéns, você passou!!!")
  }else if(media == 60){
  console.log("Por pouco em!!")
}else{
  console.log("Você repetiu de ano ;-;")
}*/


/*EXERCÍCIO DA NOTA DO BIMESTRE 2(PROFESSOR)

let soma = 0;
for (let nota = 1; nota <= 4; nota++) {
  let usuario = parseFloat(prompt("insira a nota do bimestre:" + nota))
  soma = soma + usuario
};

let media = soma / 4;
console.log("A media é: " + media);
*/


/*//EXERCÍCIO DOS PEIXES 1(MEU)
let pesoPeixe = parseFloat(prompt("Quantos quilos de peixes João trouxe hoje?"));
let excesso = pesoPeixe - 50;
let multa = excesso * 4;

if(excesso > 0){
  console.log("Passou " + excesso + " quilos.");
};

if(pesoPeixe > 50){
  console.log("Pague " + multa + " de multa.")
}else{
  console.log("Não tem multa!")
};*/


/*//EXERCÍCIO DOS PEIXES 2(PROFESSOR)
let peso = parseFloat(prompt("Qual o peso?"));

if (peso > 50){
  let excedente = peso - 50;
  console.log("O peso excedente é de: " + excedente + " kg");

  let multa = excedente * 4;
  console.log("A multa é de: " + multa);
}else{
  console.log("Não há multa.")
}*/
