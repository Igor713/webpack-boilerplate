// 705.484.450-52 070.987.720-03
export default class ValidateCPF {
  constructor(sentCPF) {
    Object.defineProperty(this, 'cleanCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sentCPF.replace(/\D+/g, '')
    });
  }

  isSequential() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

  generateNewCPF() {
    const CPFWithoutDigits = this.cleanCPF.slice(0, -2);
    const digit1 = ValidateCPF.generateDigit(CPFWithoutDigits);
    const digit2 = ValidateCPF.generateDigit(CPFWithoutDigits + digit1);
    this.newCPF = CPFWithoutDigits + digit1 + digit2;
  }

  static generateDigit(CPFWithoutDigits) {
    let total = 0;
    let reverse = CPFWithoutDigits.length + 1;

    for (let numericString of CPFWithoutDigits) {
      total += reverse * Number(numericString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate() {
    if (!this.cleanCPF) return false;
    if (typeof this.cleanCPF !== 'string') return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequential()) return false;
    this.generateNewCPF();

    return this.newCPF === this.cleanCPF;
  }
}
