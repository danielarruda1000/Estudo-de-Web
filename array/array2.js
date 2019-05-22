const lista = ['a', 'b', 'c']

console.log(lista)

lista.pop()
console.log(lista)

lista.shift()
console.log(lista)
lista.unshift('d')
console.log(lista)

lista2 = ['e','f','g']
console.log('\n',lista2)

const lista3 = lista2.slice(0,2) // uma nova lista a partir de um outro array
console.log(lista3)