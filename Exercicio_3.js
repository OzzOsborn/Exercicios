/*3- Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const sprompt = require('prompt-sync')()

let nota = Number(sprompt('Insira a nota: '))

if(nota >= 6){
    console.log('Tas aprovado!')
}else if(nota < 6 && nota >= 4){
    console.log('Recuperação!')
}else if(nota < 4){
    console.log('Reprovado!')
}else{
    console.log('Insira um numero')
}