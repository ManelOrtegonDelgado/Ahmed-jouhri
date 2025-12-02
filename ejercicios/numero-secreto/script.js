let intentos = 0;
let num;

function piensaRandom() {
    intentos = 0;
    num = parseInt(Math.random() * 100);

    document.getElementById("mensaje").innerText = "Numero secreto generado!";
    document.getElementById("intentos").innerText = "Intentos: 0";

    console.log("Numero secreto:", num);
}

function comprueba() {
    let numUser = parseInt(document.getElementById("numUser").value);

    if (numUser < num) {
        document.getElementById("mensaje").innerText = "El numero es mas grande";
        intentos++;
    } 
    else if (numUser > num) {
        document.getElementById("mensaje").innerText = "El numero es mas pequeno";
        intentos++;
    } 
    else {
        document.getElementById("mensaje").innerText = 
            "Has acertado! El numero era " + num + " — ¡Has ganado!";
    }

    document.getElementById("intentos").innerText = "Intentos: " + intentos;
}
