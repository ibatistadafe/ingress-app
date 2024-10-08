import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ReservaType } from '../../../reseva';
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';  // Importar CommonModule

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
    this.reservaList = this.resevaService.getAllReservas();
    //this.filteredReserva = this.reservaList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredReserva = this.reservaList;
      return;
    }

    this.filteredReserva = this.reservaList.filter(
      reserva => reserva?.id.toLowerCase().includes(text.toLowerCase())
    );
  }

}
