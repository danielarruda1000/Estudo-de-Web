// operador ... rest(juntar)/ spread(espalhar)

//Spread com objeto
const funcionario1 = {nome: 'Daniel', idade: 19}
const funcionario2 = {nome: 'Rafael', idade: 24}
const todosFuncionarios = {matricula: 1234, ...funcionario1}
console.log(todosFuncionarios)


//Spread com Array
const lista1 = ['a', 'b', 'c']
const listaTotal = ['1','2',...lista1]
console.log(listaTotal)