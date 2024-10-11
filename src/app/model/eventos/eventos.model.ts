// eventos.model.ts
export class Eventos {
    public id?: string;
    public nome: string;
    public descricao: string;
    public localizacao: string;
    public valor: number;
    public data: string;
    public arquivo: BufferData | string | null; // Aceita Buffer ou string
}

export interface BufferData {
    type: string;
    data: number[];
  }

export class Ingresso {
    public id?: string;
    public nome: string;
    public cpf: string;
    public email: string;
    public telefone: string;
    public tipo: string;
    public valor: number;
}

export class Ticket {
    public id?: string;
    public nome: string;
    public pago: boolean;
    public cpf: string;
    public email: string;
    public telefone: string;
    public tipo: string;
    public valor: number;
}

export class TicketsPackage {
    public id?: string;
    public codigo: number;
    public nomeEvento: string;
    public tickets: Array<Ticket>;
    public total: number;
    public pago?: boolean;
}
  