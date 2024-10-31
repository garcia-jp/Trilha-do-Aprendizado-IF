var lista = [], entrada

while (true) {
    entrada = prompt("Qual item deseja adicionar a lista? 'fim' para terminar")
    if (entrada != "fim"){
        lista.push(entrada)
        document.write("<h2>"+entrada+"</h2>")
    } else{
        break
    }
}