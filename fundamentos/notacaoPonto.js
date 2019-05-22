function obj(nome) {
    this.nome = nome
}

const pessoa = new obj("Daniel")

console.log(pessoa.nome)