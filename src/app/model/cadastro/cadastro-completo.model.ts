export class CadastroCompletoDTO {
    constructor(
    public nomeCompleto: string,
    public cpf: string,
    public email: string,
    public dataNascimento: string,
    public telefone: string,
    public rua: string,
    public numero: string,
    public complemento: string,
    public cep: string,
    public senha: string,
    public membro: boolean
    ){}
}