const chavesVariadas = new Map([
    [function() {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((valor, chave)=>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

