const tabela = [
    {nome: 'Mesa', preco: 300, fragil: false},
    {nome: 'Vidro', preco: 100, fragil: true},
    {nome: 'copo', preco: 250, fragil: true}]

console.log(tabela.filter(function(e){
    return e.preco > 100 && e.fragil != false
}))

// ouu

const caro = e => e.preco >100
const fragil = e => e.fragil

console.log('\n',tabela.filter(caro).filter(fragil))