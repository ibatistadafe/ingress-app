import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

import { mockListEvents } from '../../../assets/mocks/mock';
import { Events } from '../../model/events.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listagem-eventos',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './listagem-eventos.component.html',
  styleUrl: './listagem-eventos.component.scss'
})
export class ListagemEventosComponent implements OnInit{
  ngOnInit(): void {
    console.log(localStorage.getItem('tokenIbfIngress'));

  }

  public listEvents : Array<Events> = mockListEvents;


  
}
