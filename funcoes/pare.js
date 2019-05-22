function soma(){

    let soma = 0

    for(i in arguments){

        soma+= arguments[i]

    }
    return soma
}

//console.log("Resultado: "+soma(5,3))

function soma1(a,b,c) {

    a = a!== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1: c
    return a + b + c
}

//console.log(soma(2,2,2))
//console.log(soma())
//console.log(soma(0,0,0))

function soma2(a =1, b =1, c =1){

    return a+b+c

}

console.log(soma2(2), soma2(0,0,0))