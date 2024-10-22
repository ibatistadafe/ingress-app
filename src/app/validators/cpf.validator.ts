import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value;

    // Adiciona verificação para nulo ou indefinido
    if (!cpf) return null; // Se não houver valor, retorna válido

    // Remove caracteres não numéricos
    const cleanCpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cleanCpf.length !== 11) return { invalidCpf: true };

    // Verifica se todos os dígitos são iguais
    const todosIguais = cleanCpf.split('').every(d => d === cleanCpf[0]);
    if (todosIguais) return { invalidCpf: true };

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 1; i <= 9; i++) {
      soma += Number(cleanCpf[i - 1]) * (11 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10 || primeiroDigito === 11) {
      primeiroDigito = 0;
    }

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += Number(cleanCpf[i - 1]) * (12 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10 || segundoDigito === 11) {
      segundoDigito = 0;
    }

    // Verifica se os dígitos verificadores estão corretos
    const valid = cleanCpf[9] === String(primeiroDigito) && cleanCpf[10] === String(segundoDigito);

    return valid ? null : { invalidCpf: true };
  };
}
