const obj =  {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal

const nome = "Daniel"
const pessoa = {
    nome,
    ola(){
        return "ola mundo"
    }
}

console.log(pessoa.ola())

//class

class animal{}

class dog extends animal {

    ola(){
        return "au au!"
    }
}