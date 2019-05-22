const obj = {a:1, b:2, soma(){return a+b}}
console.log(JSON.stringify(obj))

const a = JSON.parse('{"a": 1,"b": 2, "c": [], "d": "string"}')

console.log(a)
//nao tem funcao em JSON, somente atributos, objetos