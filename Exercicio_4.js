/*4- Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const sprompt = require('prompt-sync')()

console.log('Saudações em qual lingua? \n1 - Português\n2 - Inglês\n3 - Espanhol\n4 - Japonês\n5 - Quero saudação não')

let escolha = Number(sprompt('Escolha: '))
switch(escolha){
    case 1: 
        console.log('Olá, como você esta?')
        break 
    case 2: 
        console.log('Hello, how are you?')
        break 
    case 3: 
        console.log('Hola, cómo estás?')
        break 
    case 4: 
        console.log('お元気ですか？(O-genki desu ka?)')
        break 
    case 5: 
        console.log('Então vai...')
        break 
    default:
        console.log('Erraste algo')
}