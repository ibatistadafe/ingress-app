import { Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ListagemEventosComponent } from './pages/listagem-eventos/listagem-eventos.component';
import { ComprovanteComponent } from './pages/comprovante/comprovante.component';
import { AdicionaMaisIngressoComponent } from './pages/adiciona-mais-ingresso/adiciona-mais-ingresso.component';
import { homeComponent } from './pages/home/home.component';
import { DadosPessoaisComponent } from './pages/cadastrar/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './pages/cadastrar/endereco/endereco.component';
import { CriaSenhaComponent } from './pages/cadastrar/cria-senha/cria-senha.component';
import { SuccessComponent } from './pages/cadastrar/success/success.component';
import { AuthGuard } from './services/guard/auth-guard.service';
import { EventoComponent } from './pages/evento/evento.component';
import { CriarEventoComponent } from './pages/criar-evento/criar-evento.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
<<<<<<< HEAD
import { BuscarReservaComponent } from './pages/buscar-reserva/buscar-reserva.component';
=======
import { CheckoutComponent } from './pages/checkout/checkout.component';
>>>>>>> 5b83279820a4fd910472bb3ff6ab6a5c68d4a531


export const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'adiciona-mais-ingresso', component: AdicionaMaisIngressoComponent },
  { path: 'lista-eventos', component: ListagemEventosComponent, canActivate: [AuthGuard] },
  { path: 'evento/:id', component: EventoComponent, canActivate: [AuthGuard] },
  { path: 'form-dados-pessoais', component: DadosPessoaisComponent },
  { path: 'form-endereco', component: EnderecoComponent },
  { path: 'form-senha', component: CriaSenhaComponent},
  { path: 'success', component: SuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comprovante', component: ComprovanteComponent },
  { path: 'criar-evento', component: CriarEventoComponent},
  { path: 'pagamento', component: PagamentoComponent},
<<<<<<< HEAD
  { path: 'buscar-reserva', component: BuscarReservaComponent},
=======
  { path: 'checkout', component: CheckoutComponent }
>>>>>>> 5b83279820a4fd910472bb3ff6ab6a5c68d4a531
];
