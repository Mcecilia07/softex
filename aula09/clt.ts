import { Pessoa } from "./pessoa";

export class Empresa extends Pessoa{
    public salario: number;
    public cargo: string;

    constructor(salario, cargo, nome, idade){
        super(nome, idade)
        this.salario = salario
        this.cargo = cargo
    }

    trabalhar(){}
}