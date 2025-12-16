function crearTeclado() {
  let teclado = document.getElementById("teclado");

  for (let i = 1; i <= 99; i++) {

    let tecla = document.createElement("div");
    tecla.className = "tecla";
    tecla.textContent = i;

    // números primos
    if (esPrimo(i)) {
      tecla.style.background = "green";
      tecla.style.color = "white";
    }
    // múltiplos de 3
    else if (i % 3 === 0) {
      tecla.style.background = "red";
      tecla.style.color = "white";
    }
    // múltiplos de 5
    else if (i % 5 === 0) {
      tecla.style.background = "yellow";
      tecla.style.color = "black";
    }
    // pares
    else if (i % 2 === 0) {
      tecla.style.background = "blue";
      tecla.style.color = "white";
    }
    // resto
    else {
      tecla.style.background = "teal";
      tecla.style.color = "white";
    }

    teclado.appendChild(tecla);
  }
}

function esPrimo(num) {
  if (num < 2) return false;

  let limite = Math.sqrt(num);
  for (let i = 2; i <= limite; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

crearTeclado();
