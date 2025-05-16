/*10- Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const sprompt = require('prompt-sync')()        

let entrada = parseInt(sprompt('Digite um valor inteiro: '))
for(let i = 1; i <= 10; i++){
    console.log(`${i} : ${entrada}`)
}
