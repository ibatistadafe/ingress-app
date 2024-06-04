import { Injectable } from '@angular/core';
import { DadosPessoais } from '../model/cadastro/dados-pessoais.model';
import { Endereco } from '../model/cadastro/endereco.model';
import { CriaSenha } from '../model/cadastro/cria-senha.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private dadosPessoais: DadosPessoais;
  private endereco: Endereco;
  private criaSenha: CriaSenha;

  constructor() { }

  public getDadosPessoais(): DadosPessoais {
    return this.dadosPessoais;
  }

  public setDadosPessoais(value: DadosPessoais): void {
    this.dadosPessoais = value;
  }


  public getEndereco(): Endereco {
    return this.endereco;
  }

  public setEndereco(value: Endereco): void {
    this.endereco = value;
  }

  public getSenha(): CriaSenha {
    return this.criaSenha;
  }

  public setSenha(value: CriaSenha): void {
    this.criaSenha = value;
  }

  

}
