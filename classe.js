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

//testa os atributos e métodos
const pessoa = new Pessoa("João", 1990, "Estudante");
console.log(pessoa);
pessoa.saudar();
console.log(pessoa.calculaIdade());

//Cria uma herança e mostra valores
class Estudante extends Pessoa {
  constructor(nome, anoDeNascimento, matricula) {
    super(nome, anoDeNascimento, "Estudante");
    this.matricula = matricula;
  }
  saudar() {
    console.log("Saudações, eu sou " + this.nome);
  }
}
const aluno = new Estudante("Julio", 1999, 123132);
console.log(aluno);
aluno.saudar();

//Cria outro filho de Pessoa
class Professor extends Pessoa {
  constructor(nome, anoDeNascimento, titulo) {
    super(nome, anoDeNascimento, "Professor");
    this.titulo = titulo;
  }
}
const professor = new Professor("Marta", 1980, "Mestre");
console.log(professor);
professor.saudar();
