function enviar()
{
    var nome, email, ok
    ok=false

    nome=document.getElementById("nome")
    email=document.getElementById("email")

    if(nome.value!="" && nome.value.indexOf(" ") != -1)
    {
        if(email.value.indexOf("@") != -1)
        {
            alert(nome.value + "agradeçemos seu contato!")
            ok=true
        }
        else
        {
            alert("Digite um email válido")
        }
    }
    else
    {
        alert("O campo nome não pode ficar vazio")
    }
    return ok
}