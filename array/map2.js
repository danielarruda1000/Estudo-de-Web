const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Carderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]


const passaJSON = e => JSON.parse(e)
const precos = e => e.preco

carrinho2 = carrinho.map(passaJSON).map(precos)


console.log(carrinho2)
