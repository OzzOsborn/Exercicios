/*15- Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let a = 0, b = 1, c 

console.log("1º número de fibonacci: ", a)
console.log("2º número de fibonacci: ", b)

for(let i = 3; i <= 10; i++){
    c = b + a
    console.log(`${i}º número de fibonacci: `, c)
    a = b
    b = c
}