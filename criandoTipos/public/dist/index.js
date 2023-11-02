var idioma = "Inglês";
function checarIdiomaLatino(idioma) {
    if (idioma.localeCompare("Português")) {
        console.log("Olá colega");
    }
    if (idioma.localeCompare("Inglês")) {
        console.log("Hello friend");
    }
    if (idioma.localeCompare("Espanhol")) {
        console.log("Hola manito");
    }
}
checarIdiomaLatino(idioma);
