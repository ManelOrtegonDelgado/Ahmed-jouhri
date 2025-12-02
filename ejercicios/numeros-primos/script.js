function calcularPrimos() {

    let inicio = parseInt(document.getElementById("inicio").value);
    let fin = parseInt(document.getElementById("fin").value);

    let resultado = "";

    // Validaciones
    if (inicio < 0 || fin > 100 || inicio >= fin) {
        document.getElementById("resultado").innerText = "Rango invalido";
        return;
    }

    for (let num = inicio; num <= fin; num++) {

        if (num < 2) continue;

        let esPrimo = true;
        let limite = Math.sqrt(num);

        for (let i = 2; i <= limite; i++) {

            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            resultado += num + " ";
        }
    }

    // Mostrar resultado
    document.getElementById("resultado").innerText = resultado;
}
