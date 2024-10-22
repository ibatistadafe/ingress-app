import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket, TicketsPackage } from '../../model/eventos/eventos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public ingressos: TicketsPackage;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        // Verifique se o JSON está sendo parseado corretamente
        this.ingressos = JSON.parse(params['data']);
        console.log(this.ingressos); // Deve mostrar o objeto TicketsPackage
      }
    });
  }
  
  public goHome() {
    this.router.navigate(['lista-eventos']);
  }
}
