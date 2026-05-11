function mostrarConvidados(){
    window.location.href = "convidados.html";
}

let convidados = [
    "Rafaela",
    "Felipe",
    "SAIR",
    "Nicolas",
    "Amado",
    "Miguel"
];

let entrada = [];
let i = 0;

while (entrada.length < 5 && i < convidados.length){

    console.log("Processando convidado:", convidados[i]);

    if(convidados[i] == "SAIR"){
        break;
    }

    entrada.push(convidados[i]);

    i++;
}

console.log("Lotação esgotada!");
console.log(entrada);

let lista = document.getElementById("listaConvidados");

if(lista){

    for(let nome of entrada){

        let item = document.createElement("li");

        item.textContent = nome;

        lista.appendChild(item);
    }
}