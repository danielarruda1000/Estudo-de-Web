const alunos = [
    {nome: 'a', nota: 2, bolsista: true},
    {nome: 'b', nota:4, bolsista: false}
]

const todos_bolsista = (resultado, bolsista) => resultado && bolsista
const algum_bolsista = (resultado, bolsista) => resultado || bolsista


console.log(alunos.map(e => e.bolsista).reduce(algum_bolsista))
console.log(alunos.map(e => e.bolsista).reduce(todos_bolsista))
