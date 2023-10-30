function criaEmpregado(salarioBase, valorHoraExtra, qtHorasExtra) {
  return {
    salarioBase,
    valorHoraExtra,
    qtHorasExtra,
    calculaSalario: function () {
      return this.salarioBase + this.valorHoraExtra * this.qtHorasExtra;
    },
  };
}

const empregado1 = criaEmpregado(5000, 100, 10);
const empregado2 = criaEmpregado(10000, 50, 2);

console.log(empregado1.calculaSalario());
console.log(empregado2.calculaSalario());
