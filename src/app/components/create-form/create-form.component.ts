
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // profileForm = new FormGroup({
  //   fullname: new FormControl('')
  // });

  // get fullnameControl() {
  //   return this.profileForm.get('fullname');
  // }

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
