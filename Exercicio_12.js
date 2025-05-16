/*12- Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const sprompt = require('prompt-sync')()

let valor = parseInt(sprompt('Insira um valor para criarmos a tabuada: '))

for(let i = 1; i <= 10; i++)
    console.log(`${valor} X ${i} = ${valor*i}`)