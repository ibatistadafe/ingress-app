import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
  standalone: true
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: Event){
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\D/g, '');

    if(trimmed.length > 11){
      trimmed =  trimmed.substring(0,11);
    }

    if (trimmed.length > 6) {
      trimmed = trimmed.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (trimmed.length > 2) {
      trimmed = trimmed.replace(/^(\d{2})(\d{4})/, '($1) $2');
    }
    input.value = trimmed
  }

}
