function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;
  this.calculaIdade = function () {
    return new Date().getUTCFullYear() - this.anoDeNascimento;
  };
}

const pessoa = new Pessoa("João", 1990, "Estudante");
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.calculaIdade());
pessoa.anoDeNascimento = 1975;
console.log(pessoa.calculaIdade());
