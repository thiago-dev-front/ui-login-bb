import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CpfValidator {
  static isValidCpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpf = control.value;

      if (!cpf) {
        return null; // Se o CPF estiver vazio, considere válido
      }

      if (!CpfValidator.validateCpf(cpf)) {
        return { cpfInvalid: true };
      }

      return null; // CPF válido
    };
  }

  private static validateCpf(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) {
      return false; // O CPF deve ter 11 dígitos
    }

    if (cpf.match(/^(.)\1*$/)) {
      return false; // Não permita CPFs com todos os dígitos iguais
    }

    // Verifique os dígitos verificadores
    let sum = 0;
    let rest: number;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }

    if (rest !== parseInt(cpf.substring(9, 10), 10)) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) {
      rest = 0;
    }

    if (rest !== parseInt(cpf.substring(10, 11), 10)) {
      return false;
    }

    return true; // O CPF é válido
  }
}
