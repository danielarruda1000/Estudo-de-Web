const soma = function (x,y){
    return x+y
}

const imprime = function(a,b, opecarcao = soma){

    console.log(opecarcao(a,b))
}

imprime(5,5)

imprime(3,4, (d,c) => {return d*c}) // funcao anonima Arrow

const people = {

    falar1: function(){
        console.log("ola")
    },

    falar2(){ //É a mesma coisa que o de cima
        console.log("tudo bom?")

    }
}

people.falar1()
people.falar2()