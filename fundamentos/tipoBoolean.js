let isAtivo = true
//console.log(isAtivo)

isAtivo = 0
console.log(!!(isAtivo = Infinity)) // true
console.log(!!'   ')
console.log(!![])
console.log(!!0)//false

console.log('para finalizar')
console.log(!!(0 || null || undefined || 'ola mundo'))

let nome = "meu nome"

console.log(nome || "Nome nao encontrado")

