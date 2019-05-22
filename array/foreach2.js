const alunos = ['Danie', 'Alison', 'Roberto']

alunos.forEach(function(nome, indice){
  //  console.log(`${indice+1}) ${nome}`)
})
//implementando o foreach
Array.prototype.forEach2 = function(callback){

    for(let a =0; a< this.length; a++){
        callback(this[a], a, this)

    }

}

alunos.forEach2(function(nome, indice){
    console.log(nome, indice+1)
})