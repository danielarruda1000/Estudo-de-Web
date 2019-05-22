let lista = ['Daniel', 'Ola']

console.log(lista[0])

lista[2] = 'dodo'

lista.push('joao')

lista[7] = 'eita'
console.log(lista.length)

console.log(lista)
lista.sort()
console.log(lista)
//delete lista[1]
console.log(lista)


// (indice de acesso, numero de elementos para deletar a partir do indice,
//acrescentar num novo elemento)
lista.splice(1,1,'ola2')
console.log(lista)