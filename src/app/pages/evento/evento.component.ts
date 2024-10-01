import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos } from '../../model/eventos/eventos.model';
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoVerdeComponent } from '../../components/botao-verde/botao-verde.component';

@Component({
  selector: 'app-evento',
  standalone: true,
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
  imports: [CommonModule, HeaderComponent, BotaoVerdeComponent]
})
export class EventoComponent implements OnInit {
  public evento: Eventos;
  public quantidadeIngressos: number = 1; // Inicializa com 1 ingresso
  public descricaoBotao = "Adicionar";

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventoId = params['id'];
      if (eventoId) {
        this.buscarEventoPorId(eventoId);
      }
    });
  }

  private buscarEventoPorId(id: string) {
    this.eventosService.buscarEventoPorId(id).subscribe({
      next: (evento: Eventos) => {
        this.evento = evento[0];
        if (this.evento.arquivo && typeof this.evento.arquivo === 'object' && 'data' in this.evento.arquivo) {
          this.evento.arquivo = this.arrayBufferToBase64(this.evento.arquivo.data as number[]);
        }
      },
      error: (error) => {
        console.log("Erro ao buscar o evento:", error);
      }
    });
  }

  private arrayBufferToBase64(buffer: number[]): string {
    const chunks: string[] = [];
    const chunkSize = 65536; // Tamanho máximo para cada chunk
    for (let i = 0; i < buffer.length; i += chunkSize) {
      const chunk = buffer.slice(i, i + chunkSize);
      const binary = String.fromCharCode(...chunk);
      chunks.push(binary);
    }
    return window.btoa(chunks.join('')); // Converte a string completa para base64
  }

  public eventoIsGratuito(valorEvento: number): boolean {
    return valorEvento <= 0;
  }

  adicionarIngresso() {
    this.quantidadeIngressos++;
  }
}