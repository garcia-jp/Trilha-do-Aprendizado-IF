var a
a = prompt("Qual exercicio você quer realizar: (1-5)")
var n1, n2, n3, n4

if(a == 1){
    n1 = parseInt(prompt("Entre com o valor n1: "))
    n2 = parseInt(prompt("Entre com o valor n2: "))
    n3 = n1+n2
    alert("A soma dos dois inteiros é: " + n3)
} else if(a == 2){
    n1 = parseInt(prompt("Entre com o valor n1: "))
    n2 = parseInt(prompt("Entre com o valor n2: "))
    n3 = parseInt(prompt("Entre com o valor n3: "))
    n4 = n1 * n2 * n3
    alert("O produto dos tres inteiros é: " + n4)
} else if(a == 3){
    n1 = parseInt(prompt("Entre com o valor: ")) 
    alert("O cubo desse número é: " + (n1**3))
} else if(a == 4){
    n1 = parseInt(prompt("Entre com o valor: ")) 
    alert("Seu sucessor é: " + (n1 + 1) + ", e seu antecessor é: " + (n1-1))
} else if(a == 5){
    n1 = parseInt(prompt("Entre com um lado: "))
    n2 = parseInt(prompt("Entre com outro lado: "))
    n3 = parseInt(prompt("Entre com outro lado: "))
    
} else {
    alert("Esse valor não é valido.")
}