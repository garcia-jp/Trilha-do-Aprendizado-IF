var tabuada

tabuada = parseInt(prompt("Qual é a tabuada que deseja ver? "))

if([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(tabuada) != -1){
    document.write("<h1> A tabuada do número "+tabuada+" é: </h1><br>")
    for(i = 1; i <= 10; i++){
        document.write("<h4>"+tabuada+" x "+i+" = "+(tabuada * i) + " </h4> <br>")
    } 
} else {
    alert("Esse não é um valor valido.")
}



//alert("A tabuada do número "+tabuada+" é:")
//for(i = 1; i <= 10; i++){
//    alert(tabuada+" x "+i+" = "+(tabuada * i))
//}