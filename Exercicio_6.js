/*6- Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

const sprompt = require("prompt-sync")()
let ladoA, ladoB, ladoC

ladoA = Number(sprompt('Insira o primeiro lado do triangulo (Lado-A): '))
ladoB = Number(sprompt('Insira o segundo lado do triangulo (Lado-B): '))
ladoC = Number(sprompt('Insira o terceiro lado do triangulo (Lado-C): '))

let forma_triangulo = (ladoA+ladoB>ladoC && ladoB+ladoC>ladoA && ladoA+ladoC>ladoB)

if(forma_triangulo){
    if(ladoA==ladoB && ladoB==ladoC)
        console.log("O triângulo informado é equilátero - Todos os lados são iguais")
    if(ladoA!=ladoB && ladoB!=ladoC && ladoC!=ladoA)
        console.log("O triângulo informado é escaleno - Todos os lados são diferentes")
    else
        console.log("O triângulo informado é isóceles - 2 lados são iguais")
}else{
    console.log("---- Os valores informados não formam um triângulo ---")
}