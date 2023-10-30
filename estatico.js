class ValidadorCPF {
  static TAMAHO_CPF = 11;
  static validar(cpf) {
    if (cpf.length === this.TAMANHO_CPF) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(ValidadorCPF.validar("1231231231"));
