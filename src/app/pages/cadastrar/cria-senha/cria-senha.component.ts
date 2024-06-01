import { Component } from '@angular/core';
import { CreateFormComponent } from '../../../components/create-form/create-form.component';
import { HeaderComponent } from "../../../components/header/header.component"
import { LoaderFormComponent } from '../../../components/loader-form/loader-form.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'cria-senha',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './cria-senha.component.html',
  styleUrl: './cria-senha.component.scss'
})
export class CriaSenhaComponent {
  porcentagemLargura: string;
  form: FormGroup;
  constructor
  (private fb: FormBuilder,
    private router: Router
    ) {
      this.porcentagemLargura = '100%';
     }
  ngOnInit(): void {
    this.form = this.fb.group({
      senha: new FormControl('', Validators.required),
      confirmar_senha: new FormControl('', Validators.required),
    })
  }

  verificaSeSenhasCoincidem(matchTo: string): (control: AbstractControl) => { [key: string]: boolean } | null {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { senhasNaoCoincidem: true };
    };
  }

 public enviaFormulario(): void {
 console.log('Passamos aqui', this.form.value)
  }
}

