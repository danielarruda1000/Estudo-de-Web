const Carro = function (velocidadeMax = 200, delta = 5){

    //atributo private
    let velocidadeAtual = 0

    //metodoPublico usam-se this
    this.acela = function() {

        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual+= delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelo = function(){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acela()
console.log(uno.getVelo())
console.log()
