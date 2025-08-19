let readline = require('readline-sync')

let anoNascimento = readline.question("Qual o ano que você nasceu?")
let jafezaniversario = readline.question("Você já fez aniversário esse ano?")
let idade = 2025-anoNascimento

if(jafezaniversario == "sim") {
    console.log(`Sua idade é ${idade}`)
} else {
    console.log (idade-1)
}