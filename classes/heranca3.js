const pais = {nome:'Daniel', idade: 19}

const fillha1 = Object.create(pais)

//console.log(fillha1)

fillha1.nome = 'Dominique'

//console.log(`${fillha1.nome} tem ${fillha1.idade} anos`)

//saber quais chaves estao nesse objeto
for(let key in fillha1){
    
    fillha1.hasOwnProperty(key)?
        console.log(key): console.log(`Por heranca ${key}`)

}