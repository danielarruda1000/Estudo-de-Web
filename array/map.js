const nums = [1,2,3,4]

let n2 = nums.map(function(e){
    return e*2
})

console.log(n2)

const soma10 = e => e+10
const triplo = e => e*3
const real = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//let n3 = n2.map(real)
//console.log(n3)
let n3 = n2.map(soma10).map(triplo).map(real)
console.log(n3)