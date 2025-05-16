/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for*/

const sprompt = require('prompt-sync')()
let soma_total = 0

for(let i=1; i <= 5; i++){
    soma_total+= Number(sprompt(`Digite ${i}º número: `))
}

console.log(`Resultado da soma: ${soma_total}`)