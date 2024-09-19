import { Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
<<<<<<< HEAD
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { SuccessRouteComponent } from './pages/success-route/success-route.component';


export const routes: Routes = [
  { path: '', component: CreateFormComponent},
  { path: 'zipcode', component: ZipFormComponent},
  { path: 'password', component: PasswordFormComponent},
  { path: 'success', component: SuccessRouteComponent},
=======
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ListagemEventosComponent } from './pages/listagem-eventos/listagem-eventos.component';
import { ComprovanteComponent } from './pages/comprovante/comprovante.component';


export const routes: Routes = [
  { path: '', component: ListagemEventosComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'comprovante', component: ComprovanteComponent},
>>>>>>> a6fdf526e14fd36d9979f1601b3f11c87c3138f0
];
