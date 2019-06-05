const nomes = ['Daniel', 'Joao', 'Maria']

//Percorre os valores de cada indice
for (let valores of nomes){
    console.log(valores)
}

//Percorre os indices
for (let indice in nomes){
    console.log(indice)
}

const produtos = new Map([
    ['NoteBook', {diponivel: true}],
    ['Mouse', {diponivel: true}],
    ['Monitor', {disponivel: false}]

])

for (let produto of produtos){
    console.log(produto)
}

for (let chaves of produtos.keys()){
    console.log(chaves)
}

for (let valores of produtos.values()){
    console.log(valores)
}

//Usando destructuring
for (let [ch,vl] of produtos){
    console.log(ch, vl)
}