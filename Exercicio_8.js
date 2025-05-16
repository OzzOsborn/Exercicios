/*8- Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const sprompt = require('prompt-sync')()

let valorA = Number(sprompt('Valor A: '))
let valorB = Number(sprompt('Valor B: '))

if(valorB > valorA)
    console.log(`ordem crescente: ${valorA} e ${valorB}`)
else 
    console.log(`ordem crescente: ${valorB} e ${valorA}`)