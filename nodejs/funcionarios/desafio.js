const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const soChina = e => e.pais == 'China'
const mulheres = e => e.genero == 'F'
const menorSal = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func: funcAtual
}

axios.get(url).then(Response =>{
    const funcionarios = Response.data
    console.log(funcionarios.filter(soChina).filter(mulheres).reduce(menorSal) )
     
    
})

