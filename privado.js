//Usa variáveis locais para esconder atributos
function Pessoa(nomeParam, anoDeNascimentoParam, profissaoParam) {
  let nome = nomeParam;
  let anoDeNascimento = anoDeNascimentoParam;
  let profissao = profissaoParam;
  this.getNome = function () {
    return nome;
  };
}

const pessoa = new Pessoa("joão", 1990, "Estudante");
console.log(pessoa);
console.log(pessoa.getNome());

//Usa pré fixadores para esconder atributos
class NewPessoa {
  #nome;
  #anoDeNascimento;
  #profissao;
  constructor(nome, anoDeNascimento, profissao) {
    this.#nome = nome;
    this.#anoDeNascimento = anoDeNascimento;
    this.#profissao = profissao;
  }
  saudar() {
    console.log("Olá, eu sou " + this.#nome);
  }
  calculaIdade() {
    return new Date().getUTCFullYear() - this.#getAnoNascimento();
  }
  getNome() {
    return this.#nome;
  }
  setNome(newNome) {
    this.#nome = newNome;
    console.log(this.#nome);
  }
  #getAnoNascimento() {
    return this.#anoDeNascimento;
  }
}

const newPessoa = new NewPessoa("Ana", 1992, "Professor");
console.log(newPessoa);
console.log(newPessoa.getNome());
console.log(newPessoa.calculaIdade());
newPessoa.setNome("Liliana");
console.log(newPessoa.getNome());
