import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      nome_completo: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmar_email: new FormControl('', [Validators.required, this.verificaSeEmailsCoincidem('email')]),
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
 console.log('Passamos aqui')
  }
}
