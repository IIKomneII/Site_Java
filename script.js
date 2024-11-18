function cod(){
    const codigo = document.getElementById("codigo").value

    if (inputLength == "3" || inputLength == "7") {
        input.value += '.'
    }else if (inputLength == "11") {
        input.value += '-'
    }
}

function alerta(){
    window.alert("Seus dados foram Salvos!")
}