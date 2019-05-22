//funcao factory simples

function criar() {

    return{
        nome: "Daniel",
        idade: 19

    }
}

console.log(criar())

//factory com parametro
function pessoa(nomeR = "Sem nome", idadeR = 0) {

    return{
        nome: nomeR,
        idade: idadeR

    }

}

console.log(pessoa('Daniel', 21))