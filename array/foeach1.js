const alunos = ['Danie', 'Alison', 'Roberto']

alunos.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
})

alunos.forEach((nome,indice) => console.log(nome, indice+1))
