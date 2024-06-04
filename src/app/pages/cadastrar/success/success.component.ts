import { Component } from '@angular/core';
import { CreateFormComponent } from '../../../components/create-form/create-form.component';
import { HeaderComponent } from "../../../components/header/header.component"
import { LoaderFormComponent } from '../../../components/loader-form/loader-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'success',
  standalone: true,
  imports: [ CreateFormComponent, HeaderComponent, LoaderFormComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  porcentagemLargura: string;

  constructor(
    private router: Router
  ) {
      this.porcentagemLargura = '100%';
     }

  
  public redirecionaTelaLogin(): void {
     this.router.navigate(['/login']);
  }

}

