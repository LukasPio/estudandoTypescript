const url = "https://api.github.com/users/LukasPio";
let responseData: any; // Declare a variável para armazenar os dados da resposta

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        responseData = data; // Atribui o valor da resposta à variável responseData

    })
    .catch((error) => {
        console.error("Erro: " + error);
    });

setTimeout(() => {
    console.log(responseData)
}, 100)