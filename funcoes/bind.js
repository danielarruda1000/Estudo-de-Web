const pessoa = {

    reacao:"oii",
    falar(){
        console.log(this.reacao)
    }

}

pessoa.falar()

const cap = pessoa.falar
//cap()

const cap2 = pessoa.falar.bind(pessoa)
cap2()