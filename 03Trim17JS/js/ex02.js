var nota1, nota2, nota3, frequencia, media

nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))
nota3 = parseFloat(prompt("Digite a nota 3: "))
frequencia = parseInt(prompt("Digite a frenquenca inteira do aluno: "))

media = (nota1 + nota2 + nota3) / 3

if(media >= 7 && frequencia >= 75){
    alert("O aluno foi aprovado!")
} else if(media < 7){
    alert("O aluno foi reprovado!")
} else {
    alert("O aluno precisara de mais exames.")
}
