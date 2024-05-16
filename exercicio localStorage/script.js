function salvar(){
    const salvar_texto = document.getElementById("texto").value
    localStorage.setItem("local-texto", JSON.stringify(salvar_texto))
    alert("Texto salvo")
}


function limpar(){
    const remover_texto = document.getElementById("texto").value
    localStorage.removeItem("local-texto", JSON.stringify(remover_texto))
    document.getElementById("texto").value = ""
    alert("Texto removido")
}

document.getElementById("texto").value = JSON.parse(localStorage.getItem("local-texto"))