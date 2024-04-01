import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component"
import { LoaderFormComponent } from '../../components/loader-form/loader-form.component';

import { RouterOutlet } from '@angular/router';

import { CreateFormComponent } from '../../components/create-form/create-form.component';
import { PasswordFormComponent } from '../../components/password-form/password-form.component';
import { ZipFormComponent } from '../../components/zip-form/zip-form.component';
import { SuccessRouteComponent } from '../success-route/success-route.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CreateFormComponent,
    HeaderComponent,
    LoaderFormComponent,
    ZipFormComponent,
    PasswordFormComponent,
    SuccessRouteComponent,
    RouterOutlet
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
