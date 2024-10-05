import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReservaComponent } from "../../components/reserva/reserva.component";

@Component({
  selector: 'app-buscar-reserva',
  standalone: true,
  imports: [HeaderComponent, ReservaComponent],
  templateUrl: './buscar-reserva.component.html',
  styleUrl: './buscar-reserva.component.scss'
})

export class BuscarReservaComponent {

  //filteredLocationList: HousingLocation[] = [];

  //metodo para executar um get em angular
  // executarBusca(event: KeyboardEvent): void{
  //   const teclaPressionada = event.key;
  //   console.log(teclaPressionada);

  //   if(teclaPressionada == "Enter"){
  //     console.log("#5B7GG5FG");
  //   }
  // }

  // constructor() {
  //   this.housingLocationList = this.housingService.getAllHousingLocations();
  //   this.filteredLocationList = this.housingLocationList;
  // }

}
