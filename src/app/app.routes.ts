import { Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { SuccessRouteComponent } from './pages/success-route/success-route.component';


export const routes: Routes = [
  { path: '', component: CreateFormComponent},
  { path: 'zipcode', component: ZipFormComponent},
  { path: 'password', component: PasswordFormComponent},
  { path: 'success', component: SuccessRouteComponent},
];
