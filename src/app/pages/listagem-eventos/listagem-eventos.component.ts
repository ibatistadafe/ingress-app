import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

import { mockListEvents } from '../../../assets/mocks/mock';
import { Events } from '../../model/events.model';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/eventos/eventos.service';
import { Eventos } from '../../model/eventos/eventos.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem-eventos',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './listagem-eventos.component.html',
  styleUrl: './listagem-eventos.component.scss'
})
export class ListagemEventosComponent implements OnInit{
  public listEvents : Array<Eventos>;

  constructor(
    private _eventosService:EventosService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListaEventos();
  }
  

  private getListaEventos() {
    this._eventosService.listaEventos().subscribe({
      next: (value) => {
        this.listEvents = value;
      },
      error: (error) => {
        console.log('Erro ao listar eventos');
      }
    });
  }

  public redirecionaEvento(id: string) {
    this.router.navigate([`/evento/${id}`])
  }
}
