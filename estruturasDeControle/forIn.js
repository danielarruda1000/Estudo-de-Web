const notas = [1.1, 2.2, 3.6]

for (let i in notas){ // recebe o indice
    console.log(`${i}) nota = ${notas[i]}`)
}

const obj = {

    nome: 'Daniel',
    idade: 19,
    peso: 69
}

for (let atributo in obj){

    console.log(`${atributo}) ${obj[atributo]}`)
}