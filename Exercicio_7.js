/*7- As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const sprompt = require('prompt-sync')()

let qntd_maca = Number(sprompt('Insira a quantidade de maçã comprada: '))

if(qntd_maca==0)
    console.log('Tu não comprou nenhuma maçã')
else if(qntd_maca < 12)
    console.log(`Maçãs compradas: ${qntd_maca} | valor total: R$${qntd_maca*0.30}`)
else
    console.log(`Maçãs compradas: ${qntd_maca} | valor total: R$${qntd_maca*0.25}`)
