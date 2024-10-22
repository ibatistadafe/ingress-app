import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPagamento',
  standalone: true
})
export class StatusPagamentoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Pago' : 'Não Pago';
  }

}
