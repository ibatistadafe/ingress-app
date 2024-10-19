import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos } from '../../model/eventos/eventos.model';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup'
import { ToasterPosition } from 'ng-angular-popup';


@Component({
  selector: 'app-listagem-eventos',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgxSpinnerModule, NgToastModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './listagem-eventos.component.html',
  styleUrls: ['./listagem-eventos.component.scss']
})
export class ListagemEventosComponent implements OnInit {
  menuOpen = false;
  ToasterPosition = ToasterPosition;
  public listEvents: Array<Eventos> = [];

  constructor(
    private _eventosService: EventosService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toast: NgToastService,
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getListaEventos();
  }

  private getListaEventos() {
    this._eventosService.listaEventos().subscribe({
      next: (value) => {
        this.listEvents = value.map(event => {
          if (event.arquivo && typeof event.arquivo === 'object' && 'data' in event.arquivo) {
            // Converte o array de bytes para base64
            event.arquivo = this.arrayBufferToBase64(event.arquivo.data as number[]);
          }
          this.spinner.hide();

          return event;
        });
        console.log(this.listEvents);
      },
      error: (error) => {
        this.spinner.hide();
        console.error('Erro ao listar eventos', error);
        this.toast.danger("Ops, parece que não há eventos.", "Erro", 5000);
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

  //codigo para o menu



  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public redirecionaEvento(id: string) {
    this.router.navigate([`/evento/${id}`]);
  }

  public redirecionaCriarEvento() {
    this.router.navigate(['/criar-evento']);
  }

  public redirecionarBuscarReserva() {
    this.router.navigate(['/buscar-reserva']);
  }
}
