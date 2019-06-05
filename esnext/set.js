//set nao aceita repeticao/ nao indexada

const letras = new Set()

letras.add('a')
letras.add('b').add('c')
letras.add('a') // nao e adicionado

console.log(letras)
console.log(letras.size)
console.log(letras.has('A')) // A != a
console.log(letras.has('a'))

const numeros = ['1', '2','3','2']
const numerosSet = new Set(numeros) // remove as repetiçoes

console.log(numerosSet)