var nome, idade, tipo

nome = prompt("Digite o seu nome: ")
idade = parseInt(prompt("Digite a sua idade: "))

if(idade > 18){
    tipo = "maior"
} else {
    tipo = "menor"
}


alert("Seja bem vindo(a) "+nome+"! Por você ter "+idade+" anos, você é "+tipo+" de idade.")