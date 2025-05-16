/*5- Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const sprompt = require('prompt-sync')()

let peso = Number(sprompt('Insira seu peso em quilogramas(kg): '))
let altura = Number(sprompt('Insira sua altura em metros: '))
let IMC = peso / (altura**2)
let IMC_peso
if(IMC < 18.5){
    IMC_peso = 'Abaixo do peso'
}else if(IMC < 24.9){
    IMC_peso = 'No peso ideal'
}else if(IMC < 29.9){
    IMC_peso = 'Acima do peso'
}else if(IMC >= 30){
    IMC_peso = 'Obeso'
}

console.log(`Seu indice de massa corporal é ${IMC.toFixed(2)}: ${IMC_peso} `)
