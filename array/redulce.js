const alunos = [
    {nome: 'a', nota: 2},
    {nome: 'b', nota:4}
]

const resultado = alunos.map(e => e.nota).reduce(function(acumulado, atual){
    console.log(acumulado, atual)
    return acumulado + atual
},0)

console.log(resultado)

