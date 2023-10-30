class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }
  saudar() {
    console.log("Olá, eu sou " + this.nome);
  }
  calculaIdade() {
    return new Date().getUTCFullYear() - this.anoDeNascimento;
  }
}

//Mostra que a referência aponta para o mesmo objeto
const pessoa = new Pessoa("João", 1990, "Estudante");
console.log("Eu sou o objeto 1 e me chamo " + pessoa.nome);

const pessoa2 = pessoa;
console.log("Eu sou o objeto 2 e me chamo " + pessoa2.nome);

pessoa.nome = "Maria";
console.log("Eu sou o objeto 1 e me chamo " + pessoa.nome);
console.log("Eu sou o objeto 2 e me chamo " + pessoa2.nome);

pessoa2.nome = "Luis";
console.log("Eu sou o objeto 1 e me chamo " + pessoa.nome);
console.log("Eu sou o objeto 2 e me chamo " + pessoa2.nome);
