const obj = {
    nome: "daniel",
    idade: 16,

        endere: {

            rua: "rua jose",
            casa: 10
        }

}

const {nome: vat1,idade: vat2} = obj

console.log(vat1, vat2)

const {endere: {rua: aa}} = obj

console.log(aa)