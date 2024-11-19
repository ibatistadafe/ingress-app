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

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  constructor(private router: Router) {}
 public navegarParaTelaCadastrar() : void {
  this.router.navigate(['/termos-condicoes']);
 }

 public navegarParaTelaLogin() : void {
  this.router.navigate(['/login']);
 }
}
