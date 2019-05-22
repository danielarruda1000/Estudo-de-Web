function rand({min = 0, max = 1000}){

    const valor = Math.random() * (max-min) +min
    return Math.floor(valor)

}

const obj = {

    max : 20,
    min : 00
}


const obj2 = {max: 80}
//console.log(rand(obj2))

function rand2([min = 0, max = 1000]){

    if (min > max) [min,max] = [max,min]

    const valor2 = Math.random() * (max - min) + min
    return Math.floor(valor2)

}


console.log(rand2([50,100]))