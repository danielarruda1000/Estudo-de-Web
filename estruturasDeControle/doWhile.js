function ale (min,max){

    const valor = Math.random() * (min,max) + min
    return Math.floor(valor)

}

console.log(ale(0,10))

let b = 0

do{
    b = ale(-1,10)
    console.log(`Valor = ${b}`)

}while(b != -1)