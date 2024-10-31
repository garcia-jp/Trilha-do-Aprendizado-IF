var a = [4, 8, 9, 3, 5]

/*
//alert(a[3])

for(i=0; i<a.length; i++){
    document.write("<h2>"+a[i]+"</h2>")
}

*/

lista = ["Brobroleta", "Estrada das flores", 525, 85.2, true]

alert(lista)

for(i=0; i<lista.length; i++){
    document.write("<h2>"+lista[i]+"</h2>")
}

lista.push("84500-000")
alert(lista)

lista.pop()
alert(lista)

lista.unshift("Burr")
alert(lista)