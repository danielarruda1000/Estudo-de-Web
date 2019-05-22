class Pessoa{

    constructor(nome){
        this.nome = nome // variavel publica por conta do this
    }

    falar(){

        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Daaa")
p1.falar()

//com factory

const criarPessoa = nome2 => {

    return {

        falar: () => console.log(`Meu nome é ${nome2}`)
    }
}

const p2 = criarPessoa("DA")
p2.falar()

//tranformando em fuction uma class

function Pessoa2 (nome){

    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
//instancia da mesma forma que uma classe
const p3 = new Pessoa2("ABC")
p3.falar()