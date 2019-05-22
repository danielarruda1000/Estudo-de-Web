const obj = {

    nome: "daniel",
    idade: 19,
    ende: "aaaaas"
}

//console.log(Object.keys(obj))
//console.log(Object.values(obj))


//console.log(Object.entries(obj))


//Object.entries(obj).forEach(([chave, valor]) => {
 //   console.log(`${chave}: ${valor}`)
//});


Object.defineProperty(obj, 'ende', {
    enumerable: true,
    writable: false,
    value: 'asdasdasdasd'
})

obj.ende = 'qwe'

console.log(obj)