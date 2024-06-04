import { Component } from '@angular/core';
import { CreateFormComponent } from '../../../components/create-form/create-form.component';
import { HeaderComponent } from "../../../components/header/header.component"
import { LoaderFormComponent } from '../../../components/loader-form/loader-form.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'endereco',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {
  porcentagemLargura: string;
  form: FormGroup;
  constructor
  (private fb: FormBuilder,
    private router: Router,
    private readonly _session: SessionService

    ) {
      this.porcentagemLargura = '50%';
     }
  ngOnInit(): void {
 console.log('Bora vê?: ', this._session.getDadosPessoais())

    this.form = this.fb.group({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      cep: new FormControl('', Validators.required),
    })
  }

 public enviaFormulario(): void {
  this.router.navigate(['/form-senha']);
 console.log('Passamos aqui', this.form.value)
  }
}

