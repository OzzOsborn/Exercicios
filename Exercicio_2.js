/* 2- Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

const sprompt = require('prompt-sync')()
let idade = Number(sprompt('Qual a sua idade? '))

if(idade < 13){
    console.log('Tu es uma criança')
}else if(idade < 19){
    console.log('Tu es um adolescente')
}else if(idade < 50){
    console.log('Tu es um adulto')
}else if(idade >= 50){
    console.log('Tu es um idoso')
}else{
    console.log('ERRO')
}