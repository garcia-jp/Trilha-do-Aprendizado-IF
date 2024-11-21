function enviar()
{
    var usuario, senha, ok
    ok=false

    usuario=document.getElementById("user")
    senha=document.getElementById("password")
    /*
    .value.indexOf("@")
    .value
    */

    if(usuario.value == "zezinho" && senha.value == '1234abc'){
        alert("Login bem sucedido!")
        return true
    } else if (usuario.value == "zezinho" && senha.value != '1234abc'){
        alert("Senha incoreta!")
        return false
    } else if (usuario.value != "zezinho" && senha.value == '1234abc'){
        alert("Usuário incoreto!")
        return false
    } else if (usuario.value != "zezinho" && senha.value != '1234abc'){
        alert("Usuario e senha incoreta!")
        return false
    }
}