import { Component } from '@angular/core';
import { CreateFormComponent } from '../../components/create-form/create-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CreateFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
