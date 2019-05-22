//armazenando uma funcao numa variavel

const soma1 = function(a, b ){

    console.log(a+b)
}

soma1(4,7)

const sub1 = function (c, d){
    console.log(c-d)
}

sub1(5, 2)

//funcao arrow
const soma2 = (e, f) => {
    return e+f
}

const sub2 = (j , h) => {

    return j-h
}
// retorno implicito
const soma3 = (k, l) => k-l

const imprimir2 = a => console.log(a)

imprimir2("olaa")

const funcao = function (aa,g) {
    return aa*g
}
