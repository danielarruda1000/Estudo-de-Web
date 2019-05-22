const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({extended:false}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) // E convertido para JSON
})

app.post('/produtos', (req, resp, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor execurando na porta ${porta}`)
})
