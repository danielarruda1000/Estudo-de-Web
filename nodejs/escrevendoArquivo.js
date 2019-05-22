const fs = require('fs')

const produto ={
    nome: 'celular',
    valor: 1457
}

fs.writeFile(__dirname+'/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Gravado!')
})