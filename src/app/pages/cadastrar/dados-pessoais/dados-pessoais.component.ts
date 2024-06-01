import { Component } from '@angular/core';
import { CreateFormComponent } from '../../../components/create-form/create-form.component';
import { HeaderComponent } from "../../../components/header/header.component"
import { LoaderFormComponent } from '../../../components/loader-form/loader-form.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dados-pessoais',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.scss'
})
export class DadosPessoaisComponent {
  porcentagemLargura: string;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { 
      this.porcentagemLargura = '33%';
    }
  ngOnInit(): void {
    this.form = this.fb.group({
      nome_completo: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmar_email: new FormControl('', [Validators.required, this.verificaSeEmailsCoincidem('email')]),
      data_nascimento: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),

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
  this.router.navigate(['/form-endereco']);
 console.log('Passamos aqui', this.form.value)
  }
}

