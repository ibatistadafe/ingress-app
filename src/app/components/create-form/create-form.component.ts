
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';


import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';


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

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
