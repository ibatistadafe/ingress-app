import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-termos-e-condicoes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './termos-e-condicoes.component.html',
  styleUrl: './termos-e-condicoes.component.scss'
})
export class TermosECondicoesComponent {
  ngOnInit() {
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  constructor(
    private router: Router
  ) {}

  public acceptPersonalData: boolean = false;
  public acceptPersonalDataFinnality: boolean = false;
  public acceptPersonalDataProccess: boolean = false;
  public acceptPersonalDataRisks: boolean = false;
  public acceptPersonalDataShare: boolean = false;
  public acceptPersonalDataManage: boolean = false;
  public acceptPersonalDataChanges: boolean = false;
  public acceptPersonalDataGeral: boolean = false;
  public acceptTermsAndConditions: boolean = false;

  public verifyAcceptTermsAndConditions() {
    if(!this.acceptPersonalData || !this.acceptPersonalDataFinnality || !this.acceptPersonalDataProccess || !this.acceptPersonalDataRisks || !this.acceptPersonalDataShare || !this.acceptPersonalDataManage || !this.acceptPersonalDataChanges || !this.acceptPersonalDataGeral) {
      this.acceptTermsAndConditions = false;
    } else {
      this.acceptTermsAndConditions = true;
    }
  }

  goCadastroDadosPessoais() {
    this.router.navigate(['/form-dados-pessoais'])
  }
}
