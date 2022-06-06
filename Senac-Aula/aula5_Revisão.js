//REVISÃO

//TIPOS=====typeof
let usuario;
console.log(usuario,typeof(usuario));

usuario = "meu número é 513516";
console.log(usuario,typeof(usuario));

usuario = parseFloat(usuario);
console.log(usuario,typeof(usuario));


console.log(isNaN(usuario), typeof(isNaN(usuario)));


//if ==== DECISÃO

let idade = 15

if(idade<18){
  console.log(idade + " menor de idade!_!");
}else if(idade == 18){
  console.log(idade,"Idade é 18.")
}else{
  console.log("Maior de idade!-!");
};


//EXERCÍCIO 1 DA REVISÃO
// mostrar o maior e o menor entre três números
//extra1: mostrar os tres valores em ordem
//extra2: validar a entrada de valores


console.log("Por gentileza, coloque apenas números menores do que 100 e maiores que do que 0!!!")
let v1 = parseFloat(prompt("Valor 1: "));
let v2 = parseFloat(prompt("Valor 2: "));
let v3 = parseFloat(prompt("Valor 3: "));


  if (v1 < 100 && v2 < 100 && v3 < 100 && v1 > 0 && v2 > 0 && v3 > 0) {
    if (v1 >= v2 && v1 >= v3) {
      console.log("O número " + v1 + " é o maior!!");
    } else if (v2 >= v3) {
      console.log("O número " + v2 + " é o maior!!");
    } else {
      console.log("O número " + v3 + " é o maior!!");
    };

    if (v1 <= v2 && v1 <= v3) {
      console.log("O número " + v1 + " é o menor!!");
    } else if (v2 <= v3) {
      console.log("O número " + v2 + " é o menor!!");
    } else {
      console.log("O número " + v3 + " é o menor!!");
    };
  } else {
    console.log("Ínvalido");
  };





//EXERCÍCIO 2 DA REVISÃO
//mostrar se dois números são iguais ou n

let n1 = parseFloat(prompt("Valor 1: "));
let n2 = parseFloat(prompt("Valor 2: "));

if (n1 == n2) {
  console.log(n1 + " e " + n2 + " são iguais!!");
} else if (n1 > n2 || n1 < n2) {
  console.log(n1 + " e " + n2 + " não são iguais.")
} else {
  console.log("Ínvalido");
};



//EXERCÍCIO 3 DA REVISÃO
//receber um valor, tratá-lo e retornar se ele é Par ou Ímpar

let continua = true;

while (continua) {

  let sair = prompt("Sair?");
  if (sair == "n") {
    let number = parseFloat(prompt("Número: "));

    if (number % 2 == 1) {
      console.log("Ímpar!!");
    } else {
      console.log("Par!!");
    };
  } else {
    continua = false;
  };
};



//EXERCÍCIO 4 DA REVISÃO
//Conte de 1 à 20, mostrando se o valor é par ou ímpar.

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i + " é Ímpar!!");
  } else {
    console.log(i + " é Par!!");
  };
};



//EXERCÍCIO 5 DA REVISÃO
//Receba um valor do usuário. Mostre a tabuada daquele valor.

let number = prompt("Número: ");

for(let i = 1; i <=10; i++){
  soma = number * i ;
  console.log(number + " x " + i + " = " + soma);
};



//EXERCÍCIO 6 DA REVISÃO

console.log("Comecem os votos: ");

let joao = parseFloat(0);
let jorge = parseFloat(0);
let jose = parseFloat(0);
let jacob = parseFloat(0);
let nulo = parseFloat(0);
let branco = parseFloat(0);

let votos = parseFloat(0);

for(let eleito = 1; eleito <= 5; eleito++){

console.clear();
  
    console.log("1 - João");
    console.log("2 - José");
    console.log("3 - Jorge");
    console.log("4 - Jacob");
    console.log("5 - Nulo");
    console.log("6 - Em Branco");
    
    let voto = prompt("Votar: ");

    if (voto == "1") {
      joao++
      votos++
    } else if (voto == "2") {
      jose++
      votos++
    } else if (voto == "3") {
      jorge++
      votos++
    } else if (voto = "4") {
      jacob++
      votos++
    } else if (voto == "5") {
      nulo++
      votos++
    } else if (voto == "6") {
      branco++
      votos++
    }else{
      console.log("Ínvalido!!");
    };
  };

  console.log("");

  console.log("########Resultado dos votos########");

  console.log("Número de votos: " + votos);
  console.log("Votos no João: " + joao);
  console.log("Votos no José: " + jose);
  console.log("Votos no Jorge: " + jorge);
  console.log("Votos no Jacob: " + jacob);
  console.log("Número de votos nulo: " + nulo);
  console.log("Número de votos em branco: " + branco);
console.log(nulo, votos)

    if (joao > jose && joao > jorge && joao > jacob) {
      console.log("João foi o ganhador!!");
    } else if (jose > jorge && jose > jacob) {
      console.log("José foi o ganhador!!");
    } else if (jorge > jacob && jorge > joao) {
      console.log("Jorge é o ganhador!!");
    } else if (jacob > jose) {
      console.log("Jacob é o ganhador!!");
    };

    // let nuloPorcento = parseFloat(votos / nulo);
    // console.log("A porcentagem de votos NULOS foi de: " + nuloPorcento + "%");

    // let brancoPorcento = parseFloat(votos / branco);
    // console.log("A porcentagem de votos EM BRANCO foi de: " + brancoPorcento + "%");
