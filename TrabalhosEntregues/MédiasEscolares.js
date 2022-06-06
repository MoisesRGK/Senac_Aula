let soma = 0

const N = parseInt(prompt("Quantidade de alunos: "));
let notas = [];

for (let i = 0; i < N; i++) {
  let nNotas = parseFloat(prompt("Quantidade de notas: "));

  function Media(notas, i, nNotas) {
    for (let b = 0; b < nNotas; b++) {
      soma = (soma + notas[i][b]);
    };
    let media = soma / nNotas;
    return media;
  };

  notas.push([]);


  for (let n = 0; n < nNotas; n++) {
    notas[i][n] = parseFloat(prompt("Nota: "));
  };
  console.log(notas);
  console.log(Media(notas, i, nNotas));
  console.log(soma);
};
