import { Component } from '@angular/core';
import { CreateFormComponent } from '../../components/create-form/create-form.component';
import { HeaderComponent } from "../../components/header/header.component"
import { LoaderFormComponent } from '../../components/loader-form/loader-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
