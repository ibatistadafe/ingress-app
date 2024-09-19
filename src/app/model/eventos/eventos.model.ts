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
  