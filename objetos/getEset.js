const seq = {

    _valor: 1, // convenção para entender que é um private
    get valor() {
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
        this._valor = valor
        }
    }
}

seq._valor = 100
seq.valor = 80
console.log(seq.valor, seq.valor)