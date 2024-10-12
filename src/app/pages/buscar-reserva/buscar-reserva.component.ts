import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TicketsPackage } from '../../model/eventos/eventos.model';

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [HeaderComponent, ReservaComponent, CommonModule],
  templateUrl: './buscar-reserva.component.html',
  styleUrl: './buscar-reserva.component.scss'
})

export class BuscarReservaComponent {

  reservaList: TicketsPackage[] = [];
  resevaService: ResevaService = inject(ResevaService);
  filteredReserva: TicketsPackage[] = [];

  constructor() {
    this.resevaService.getAllReservas().subscribe((reservas: TicketsPackage[])=> {
      this.reservaList = reservas;
      // this.filteredReserva = reservas;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredReserva = this.reservaList;
      return;
    }

    this.filteredReserva = this.reservaList.filter(
      reserva => reserva?.codigo.toString().toLowerCase().includes(text.toLowerCase())
    );
  }

}
