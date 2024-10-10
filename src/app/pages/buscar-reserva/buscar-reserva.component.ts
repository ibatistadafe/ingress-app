import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ReservaType } from '../../../reseva';
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [HeaderComponent, ReservaComponent, CommonModule],
  templateUrl: './buscar-reserva.component.html',
  styleUrl: './buscar-reserva.component.scss'
})

export class BuscarReservaComponent {

  reservaList: ReservaType[] = [];
  resevaService: ResevaService = inject(ResevaService);
  filteredReserva: ReservaType[] = [];

  constructor() {
    this.resevaService.getAllReservas().subscribe((reservas: ReservaType[])=> {
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
      reserva => reserva?.codigo.toLowerCase().includes(text.toLowerCase())
    );
  }

}
