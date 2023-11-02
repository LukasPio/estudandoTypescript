type idiomasLatinos = "Português" | "Inglês" | "Espanhol"

let idioma: idiomasLatinos = "Inglês"

function checarIdiomaLatino(idioma: idiomasLatinos) {
    if (idioma.localeCompare("Português")) {
        console.log("Olá colega")
    }
    if (idioma.localeCompare("Inglês")) {
        console.log("Hello friend")
    }

    if (idioma.localeCompare("Espanhol")) {
        console.log("Hola manito")
    }
}

checarIdiomaLatino(idioma)