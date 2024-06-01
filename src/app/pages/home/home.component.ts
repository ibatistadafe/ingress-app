import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class homeComponent {

  constructor(private router: Router) {}
 public navegarParaTelaCadastrar() : void {
  this.router.navigate(['/form-dados-pessoais']);
 }

 public navegarParaTelaLogin() : void {
  this.router.navigate(['/login']);
 }
}
