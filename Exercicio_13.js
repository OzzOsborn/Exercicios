/*13- Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const sprompt = require('prompt-sync')()

let divisor = 0
let soma = 0
let valor

do{
    valor = parseFloat(sprompt('Insira valores para a média - (Digite 0 para fazer a operação):'))
    soma += valor
    if(valor !== 0)
        ++divisor
}while(valor!== 0)

console.log("Média = ", soma/divisor)