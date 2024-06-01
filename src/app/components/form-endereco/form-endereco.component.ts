import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'form-endereco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './form-endereco.component.html',
  styleUrl: './form-endereco.component.scss'
})
export class FormEnderecoComponent implements OnInit{
  form: FormGroup;
  constructor
  (private fb: FormBuilder,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      cep: new FormControl('', Validators.required),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
    })
  }

  verificaSeEmailsCoincidem(matchTo: string): (control: AbstractControl) => { [key: string]: boolean } | null {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { emailsNaoCoincidem: true };
    };
  }

 public enviaFormulario(): void {
 console.log('Passamos aqui', this.form.value)
  }
}
