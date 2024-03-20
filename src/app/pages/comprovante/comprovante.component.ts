import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-comprovante',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './comprovante.component.html',
  styleUrl: './comprovante.component.scss'
})
export class ComprovanteComponent {

}
