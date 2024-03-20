import { Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ListagemEventosComponent } from './pages/listagem-eventos/listagem-eventos.component';
import { ComprovanteComponent } from './pages/comprovante/comprovante.component';


export const routes: Routes = [
  { path: '', component: ListagemEventosComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'comprovante', component: ComprovanteComponent},
];
