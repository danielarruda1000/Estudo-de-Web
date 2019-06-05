
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor)? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco1 = 59.90
const  parcela = 20

console.log(real `1x de ${preco1} ou 3x de ${parcela}.`)
