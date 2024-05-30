import { Component } from '@angular/core';
import { CreateFormComponent } from '../../components/create-form/create-form.component';
import { HeaderComponent } from "../../components/header/header.component"
import { LoaderFormComponent } from '../../components/loader-form/loader-form.component';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent ],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {

}
