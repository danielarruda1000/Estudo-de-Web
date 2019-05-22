class Lancamento{

    constructor(nome,valor){
        this.name = nome
        this.valor = valor
    }
}

class contasCasa{

    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lacamento = []
    }

    addLancamento(...Lancamento) {
        Lancamento.forEach(l =>{this.lacamento.push(l)})
    }
 //   sumario(){

   //     let total = 0
    //    this.lacamento.forEach(l =>{total += l.valor})
     //   return total

   // }
}

class Forma extends contasCasa{

        sumario(){

      let total = 0
       this.lacamento.forEach(l =>{total += l.valor})
      return total

   }

}


const janeiro = new Forma(1,2019)
const conta1 = new Lancamento('agua', -100)
const conta2 = new Lancamento('luz', -300)

janeiro.addLancamento(conta1,conta2)


console.log(janeiro)
console.log(janeiro.sumario())
