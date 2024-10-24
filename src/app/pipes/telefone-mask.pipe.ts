import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneMask'
})
export class TelefoneMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const telefone = value.replace(/\D/g, '');
    const telefoneMasked = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    return telefoneMasked;
  }
}