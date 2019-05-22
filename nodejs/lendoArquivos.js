const fs = require('fs')

const caminho = __dirname+'/arquivo.json'

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.local}`)
})

//sincrono
const conteudoLido = fs.readFileSync(caminho, 'utf-8')
console.log(conteudoLido)

//sincrono
const ar = require('./arquivo.json')
console.log(ar.db.pass)