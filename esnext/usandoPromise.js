const http = require('http')

const getTurma = letras =>{

    const url = `http://files.cod3r.com.br/curso-js/turma${letras}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res=>{
            let resultado = ''

            res.on('data', dados =>{
                resultado +=dados
            })

            res.on('end', ()=>{
                try{
                callback(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })

        })
    })

}

let nomes = []

getTurma('A').then(alunos=>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))
        getTurma('C').then(alunos=>{
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})