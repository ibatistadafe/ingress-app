
import { Component } from '@angular/core';
import { FormsModule,  NgForm} from '@angular/forms';


import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  form = {
    fullname: '',
    cpf: '',
    email: '',
    confirmEmail: '',
    dateBirthDay: '',
    phone: ''
  }

  constructor(private router: Router ){ }

  onSubmit(): void {
    console.log('EU ESTOU SENDO EXECUTADO')
    console.log(JSON.stringify(this.form, null, 2));
    this.router.navigate(["/zipcode"]);
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
