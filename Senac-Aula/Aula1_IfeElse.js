//if = Se

//prompt = para escrever

var preco = prompt("Qual o Preço?");
preco = parseFloat(preco);

var valorPago = prompt("Quanto pagou?");
valorPago = parseFloat(valorPago);

var troco = valorPago - preco;

var falta = preco - valorPago;

if(valorPago == preco){
console.log("Muito bem! Não tem troco.")
} else if(valorPago > preco){
  console.log("Troco de " + troco + " reais!")
}else{
console.log("Falta " + falta + " reais.")
};


/*Tipos de typeof:
string -> Texto
int/number -> inteiro
float/number -> decimal
object -> objeto
array -> linha*/
//else -> se não


//Transferindo o líquido de um copo para o outro == Desafio dos copos
/*
var copoVerde = "Coca-cola";
var copoPreto = "Guaraná";
var copoVazio = "";
console.log(copoVerde,copoPreto);

copoVazio = copoVerde;
copoVerde = copoPreto;
copoPreto = copoVazio;
console.log(copoVerde,copoPreto);*/


var usuario = prompt("Qual seu nome???");
console.log("Olá " + usuario + "!!!");
var idade = prompt("Qual a sua idade???");
idade = parseInt(idade);

if(idade > 18){
  console.log("Maior de idade 'v'")
}else if(idade == 18){
  console.log("Já pode ser preso ein,kkkkkk")
}else if(idade == 16){console.log("É melhor estudar bastante!")}
else{
  console.log("Menor de idade ;-;")};

if(idade < 18){
  console.log("Vou ligar para sua mãe!")
};






// alt + (seta pra cima) = muda ordem das linhas