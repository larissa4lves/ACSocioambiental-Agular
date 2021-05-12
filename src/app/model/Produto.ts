import { Categoria } from "./Categoria"

export class Produto{
    public id: number
    public nome: string
    public descricao: string
    public imagem: string
    public preco: number
    public ativo: boolean
    public categoria: Categoria
}
