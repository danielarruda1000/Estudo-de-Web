function tratarerro(erro) {

    throw new Error('Deu ruim')

}


function gritar(obj) {

    try{
        console.log(obj.name.toUpperCase() + "!!!!")
    }
    catch(e){
        tratarerro(e)
    }finally{

        console.log("\nTerminado\n")
    }


}

const obj1 ={

    name: 'daniel',
    idade: 19

}

gritar(obj1)