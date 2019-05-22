function getPreco(imposto = 0, moeda = 'R$'){

        return `${moeda} ${this.preco * (1-this.desc) * (1 + this.imposto)} `
}

const produto = {

    nome: "Note",
    preco: 100,
    desc: 0.1,
    getPreco

}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco: 100, desc:0.1}

console.log(getPreco.call(global,0.1,'$'))