import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [HeaderComponent, ReservaComponent, CommonModule, FormsModule],
  templateUrl: './buscar-reserva.component.html',
  styleUrl: './buscar-reserva.component.scss'
})

export class BuscarReservaComponent {
  codigo!: number;
  evento: any = null;
  erro: string = '';

  constructor(private resevaService: ResevaService) { }

  buscarEvento() {
    this.resevaService.getEventoByCodigo(this.codigo).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.evento = data[0];  // Pegue o primeiro item do array
          this.erro = '';
        } else {
          this.erro = 'Evento não encontrado.';
          this.evento = null;
        }
      },
      error: (err) => {
        this.erro = 'Erro ao buscar o evento.';
        this.evento = null;
      }
    });
  }

}
