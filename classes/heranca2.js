//cadeia de prototipos

//Object.prototype.at0 = 'z'
const avo = {at1: 'A'}
const pai = {__proto__: avo, at2: 'B'}
const filho = {__proto__: pai, at3: 'C'}

//console.log(avo)
//console.log(pai)
//console.log(filho)

//console.log(avo.at0)

// 1 - Cria a classe
const carro = {

    velAtual: 0,
    velMax:240,
    acelecar(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual+= delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMax}`
    }
}
// 2 - Cria uma outra classe
const ferrari = {
    //velAtual = 100,
    velMax: 300
}
// 3 - Cria um outra classe
const fusca = {
    __proto__:carro,
    modelo: 'fusca',
    velAtual: 150,
    status(){
        return `${this.modelo}: ${super.status()}`

    }
}

// 3 - atribui a heranca
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(fusca, carro)

ferrari.acelecar(10)

console.log(fusca.status())
console.log(ferrari.status())