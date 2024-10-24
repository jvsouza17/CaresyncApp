import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMask'
})
export class CpfMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const cpf = value.replace(/\D/g, '');
    const cpfMasked = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpfMasked;
  }
}