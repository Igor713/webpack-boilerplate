import ValidateCPF from './ValidateCPF';

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatted(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCPF() {
    const CPFWithoutDigits = this.rand();
    const digit1 = ValidateCPF.generateDigit(CPFWithoutDigits);
    const digit2 = ValidateCPF.generateDigit(CPFWithoutDigits + digit1);
    const newCPF = CPFWithoutDigits + digit1 + digit2;
    return this.formatted(newCPF);
  }
}
