let jogar = true;

while (jogar) {

  jogando = prompt("Vamos jogar Par ou Ímpar? ");
  if (jogando == "sim") {
    let parImpar = prompt("Ímpar ou Par?");
    let number = parseFloat(prompt("Número: "));

    let computer = Math.floor(Math.random(0, 5) * 10);
    console.log("Eu escolho " + computer);

    let soma = number + computer;
    console.log("Deu " + soma);


    if (parImpar == "par") {
      if (soma % 2 == 0) {
        console.log("Par!! Parabéns, você ganhou!");
      } else {
        console.log("Ímpar, você perdeu..");
      }
    } else {
      if (soma % 2 == 1) {
        console.log("Ímpar!! Parabéns, você ganhou!");
      } else {
        console.log("Par, você perdeu..");
      };
    };
  }else{
    jogar = false;
  };
};