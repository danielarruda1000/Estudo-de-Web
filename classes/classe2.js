class Avo{

    constructor(sobrenome){
        this.sobrenome = sobrenome
    }

}

class Pai extends Avo{

    constructor(sobrenome, profissao = 'Policia'){
        super(sobrenome)
    
    }
}

class Filho extends Pai{

    constructor(){
        super('silva')
        
    }
}

const opa = new Filho()

console.log(opa)