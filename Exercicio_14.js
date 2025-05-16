/*14- Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const sprompt = require('prompt-sync')()
let valor = Number(sprompt('Entre com o valor para calcular seu fatorial: '))
let fatorial = 1

for(let i = valor; i > 0; i--)
    fatorial *= i

console.log(`${valor}! = ${fatorial}`)
