let readline = require("readline-sync")
let n1 = parseInt(readline.question("Digite o primeiro número"))
let n2 = parseInt(readline.question("Digite o segundo número"))
console.log("Escolha a operação:");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
const operacao = readline.question("Digite o número da operação desejada: ");

switch(operacao){
    case "1":
        console.log("A soma é: " + (n1+n2))
        break;
    case "2":
        console.log("A subtração é: " + (n1-n2))
        break
    case "3":
        console.log("A multiplicação é: " + (n1*n2))
        break
    case "4":
        console.log("A divisão é: " + (n1/n2))
        break
    default:
        console.log("operação não aceita")    
}