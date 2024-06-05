import { Component } from '@angular/core';
import { CreateFormComponent } from '../../../components/create-form/create-form.component';
import { HeaderComponent } from "../../../components/header/header.component"
import { LoaderFormComponent } from '../../../components/loader-form/loader-form.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { CriaSenha } from '../../../model/cadastro/cria-senha.model';
import { CadastroService } from '../../../services/cadastro/cadastro.service';
import { CadastroCompletoDTO } from '../../../model/cadastro/cadastro-completo.model';
import { HttpClientModule } from '@angular/common/http';
import { DadosPessoais } from '../../../model/cadastro/dados-pessoais.model';
import { Endereco } from '../../../model/cadastro/endereco.model';

@Component({
  selector: 'cria-senha',
  standalone: true,
  imports: [CreateFormComponent, HeaderComponent, LoaderFormComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './cria-senha.component.html',
  styleUrl: './cria-senha.component.scss'
})
export class CriaSenhaComponent {
  porcentagemLargura: string;
  form: FormGroup;

  constructor
    (private fb: FormBuilder,
      private router: Router,
      private _session: SessionService,
      private _cadastroService: CadastroService
    ) {
    this.porcentagemLargura = '75%';
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      senha: new FormControl('', [Validators.required, Validators.minLength(8), this.validaSeExisteCaractereEspecial()]),
      confirmar_senha: new FormControl('', [Validators.required, this.verificaSeSenhasCoincidem('senha')]),
      membro: new FormControl(false),
    })
  }

  public validaSeExisteCaractereEspecial() {
    return (control: any) => {
      const value = control.value;
      if (value && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        return { caractereEspecial: true };
      }
      return null;
    };
  }

  public verificaSeSenhasCoincidem(matchTo: string): (control: AbstractControl) => { [key: string]: boolean } | null {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { senhasNaoCoincidem: true };
    };
  }

  public enviaFormulario(): void {
    let criaSenha = new CriaSenha();
    criaSenha.senha = this.form.value.senha;
    criaSenha.membro = this.form.value.membro;
    this._session.setSenha(criaSenha);

    const dadosPessoais = this._session.getDadosPessoais();
    const endereco = this._session.getEndereco();
    const senha = this._session.getSenha();

    this._cadastroService.criaCadastro(this.montaCadastroCompleto(dadosPessoais, endereco, senha)).subscribe({
      next: () => { this.router.navigate(['/success']) },
      error: (erro) => { console.log(erro) }
    });
  }

  private montaCadastroCompleto(dadosPessoais: DadosPessoais, endereco: Endereco, senha: CriaSenha): CadastroCompletoDTO {
    return new CadastroCompletoDTO(
      dadosPessoais.nomeCompleto,
      dadosPessoais.cpf,
      dadosPessoais.email,
      dadosPessoais.dataNascimento,
      dadosPessoais.telefone,
      endereco.rua,
      endereco.numero,
      endereco.complemento,
      endereco.cep,
      senha.senha,
      senha.membro
    );
  }
}

