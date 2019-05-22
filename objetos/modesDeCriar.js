//funcao construturora, modo de fazer uma "classe"
function Carro(marca, preco){
    this.marca = marca
    this.preco = preco

    this.getNome = () => {
        
        console.log(this.marca)

    }
}

const carro1 = new Carro('Fiat', 25000)

carro1.getNome()

//funcao factory muito usada

function criarObj(nome) {
//retorna um objeto
    return {
        nome
    }
}

const f1 = new criarObj('Daniel')

console.log(f1)

//objeto.creat
const f3 = Object.create(null)
f3.nome = 'Daaa'
console.log(f3)

//Por JSON

const convertJson = JSON.parse('{"info": "olaaa"}')
console.log(convertJson.info)