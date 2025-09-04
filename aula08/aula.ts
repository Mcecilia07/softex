class Carro {
    public marca: string
    public cor: string
    public placa: string
    public modelo: string
    public ano: number

    constructor(marca, cor, placa, modelo, ano){
        this.marca = marca
        this.cor = cor
        this.placa = placa
        this.modelo = modelo
        this.ano = ano
    }

    ligar(){
        console.log("ligado")
    }
    desligar(){
        console.log("desligado")
    }
}
const carro1 = new Carro("fiat", "branco", "PEV1B37", "uno", 2013)

carro1.ligar();
carro1.desligar();


/*PESSOA / CELULAR / Animal*/

class Pessoa {
    public nome: string
    public idade: number
    private cpf: string
    public dataNasc: string
    public email: string
    public telefone: number

    constructor(nome, idade, cpf, dataNasc, email, telefone){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.dataNasc = dataNasc
        this.email = email
        this.email = telefone
    }

    comer(){
        console.log("nhamnham")
    }
    dormir(){
        console.log("zzz")
    }
    estudar(){
        console.log("enem")
    }
    correr(){
        console.log("cansei")
    }
    trabalhar(){
        console.log("ocupado")
    }
    dirigir(){
        console.log("vrumvrum")
    }
}
const pessoa1 = new Pessoa("maria", 15, "123", "12/12/12", "maria@gmail.com", "8191234567")
const pessoa2 = new Pessoa("joão", 12, "238", "22/11/07", "joao@gmail.com", "81923578")
const pessoa3 = new Pessoa("andré", 45, "453", "30/05/78", "andre@gmail.com", "819762345")

class Celular {
    public marca: string
    public modelo: string
    public temseguro: boolean
    public cor: string
    public temfone: boolean
    public temcarregador: boolean

    constructor(marca, modelo, temseguro, cor, temfone, temcarregador){
        this.marca = marca
        this.modelo = modelo
        this.temseguro = temseguro
        this.cor = cor
        this.temfone = temfone
        this.temcarregador = temcarregador
    }

    ligar(){
        console.log("on...")
    }
    desligar(){
        console.log("off...")
    }
    fotografar(){
        console.log("olha a foto...")
    }
    gravar(){
        console.log("gravando...")
    }
    baixar(){
        console.log("baixando...")
    }
    alarmar(){
        console.log("acordaaaaa")
    }
}
const celular1 = new Celular("xiaomi","redmi10", true,  "branco", false, true)
const celular2 = new Celular("samsung", "a52", false, "preto", true, false)
const celular3 = new Celular("apple", "iphone15", true, "azul", true, false)


class Animal {
    public nome: string
    public idade: number
    public cor: string
    public raca: string
    public peso: string
    public temcastracao: boolean

    constructor(nome, idade, cor, raca, peso, temcastracao){
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.raca = raca
        this.peso = peso
        this.temcastracao = temcastracao
    }
    comer(){
        console.log("nhamnham")
    }
    dormir(){
        console.log("zzzzz")
    }
    brincar(){
        console.log("amooo")
    }
    correr(){
        console.log("aaaaaa")
    }
    banhar(){
        console.log("slpashh")
    }
    passear(){
        console.log("uhuuuu")
    }
}

const animal1 = new Animal("mimi", 3, "branco", "poodle", "7", true)
const animal2 = new Animal("juca", 5, "caramelo", "vira-lata", "10", false)
const animal3 = new Animal("zezo", 7, "marrom", "salsicha", "5", true)