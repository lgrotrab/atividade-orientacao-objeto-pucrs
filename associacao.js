class Nota {
  #disciplina;
  #grau;
  constructor(disciplina, grau) {
    this.#disciplina = disciplina;
    this.#grau = grau;
  }
  getDisciplina() {
    return this.#disciplina;
  }
  getGrau() {
    return this.#grau;
  }
  setGrau(newGrau) {
    this.#grau = newGrau;
  }
}

class Estudante {
  #nome;
  #matricula;
  #notas;
  constructor(nome, matricula) {
    this.#nome = nome;
    this.#matricula = matricula;
    this.#notas = [new Nota("placeholder", 0)];
  }
  escreveNotas() {
    this.#notas.forEach((nota) => {
      console.log(
        this.#nome + " Tirou " + nota.getGrau() + " em " + nota.getDisciplina()
      );
    });
  }
  addNota(disciplina, grau) {
    this.#notas.push(new Nota(disciplina, grau));
  }
}

const estudante = new Estudante("João", "123123123");
console.log(estudante);
estudante.addNota("Algoritmo", 10);
estudante.addNota("OO", 7);
estudante.escreveNotas();
