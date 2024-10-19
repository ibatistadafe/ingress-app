import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";
import { ResevaService } from '../../services/reserva/reseva.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlterarReservaService } from '../../services/reserva/alterar-reserva.service';

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
  pago: false;
  constructor(private resevaService: ResevaService, private alterarReservaService: AlterarReservaService) { }

  buscarEvento() {
    this.resevaService.getEventoByCodigo(this.codigo).subscribe({
        next: (data) => {
            this.evento = data?.length ? data[0] : null;
            this.erro = this.evento ? '' : 'Evento não encontrado.';
        },
        error: () => {
            this.erro = 'Erro ao buscar o evento.';
            this.evento = null;
        }
    });
}


  onStatusChange(status: boolean) {
    const codigo = this.evento.codigo; // Pega o código do evento

    const subscription = this.alterarReservaService.putAlterarReserva(codigo, status).subscribe({
      next: (response) => {
        console.log('Reserva alterada com sucesso', response);
        subscription.unsubscribe();
      },
      error: (error) => {
        console.error('Erro ao alterar a reserva', error);
        subscription.unsubscribe();
      }
    });
  }

}
