//retornar uma funcao

function somar(a,b){

    return function (c){
        console.log(a+b+c)

    }

}

somar(2,5)(1)

const seteMais = somar(2,5)
seteMais(5)