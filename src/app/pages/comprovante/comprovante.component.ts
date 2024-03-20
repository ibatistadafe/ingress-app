import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprovante',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './comprovante.component.html',
  styleUrl: './comprovante.component.scss'
})
export class ComprovanteComponent {

    constructor(private router: Router){ }

    navigateToEventPage(){
      this.router.navigate(['/'])
    }

    id: number = 101;
    value: number = 101.01;
    pagamentForm: string = 'PIX/QR Code';
    names: string = "Jessica, Everton";
    // constructor(){}

}
