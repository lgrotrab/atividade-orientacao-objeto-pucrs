function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getUTCFullYear() - this.anoDeNascimento;
  };
}
function descobreTipo(objeto) {
  if ("Object" == objeto.constructor.name) {
    console.log("É um objeto raiz");
  } else {
    console.log("É um objeto do tipo " + objeto.constructor.name);
  }
}

//Mostra o prototype de funções criadas de maneira diferente e métodos herdados
const pessoa = new Pessoa("João", 1990, "Estudante");
const pessoa2 = new Object();
console.log(pessoa.valueOf());
descobreTipo(pessoa);
descobreTipo(pessoa2);
console.log(Object.getPrototypeOf(pessoa2));

//Cria objeto usando o prototype
const novaPessoa = Object.create(pessoa);
console.log(novaPessoa);
console.log(Object.getPrototypeOf(novaPessoa));

//Usa prototype para adicionar métodos a todos objetos do construtor Pessoa
console.log("pessoa " + pessoa.saudar);
console.log("novaPessoa " + novaPessoa.saudar);
Pessoa.prototype.saudar = function () {
  console.log("olá eu estou saudando");
};
console.log("pessoa " + pessoa.saudar);
console.log("novaPessoa " + novaPessoa.saudar);
