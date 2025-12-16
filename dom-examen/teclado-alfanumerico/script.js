let teclado = document.getElementById("teclado");
let pantalla = document.getElementById("pantalla");

for (let codigo = 65; codigo <= 90; codigo++) {

  let letra = String.fromCharCode(codigo);
  let tecla = document.createElement("div");
  tecla.classList.add("tecla");
  tecla.textContent = letra;

  if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
    tecla.classList.add("vocal");
  } else {
    tecla.classList.add("consonante");
  }

  tecla.addEventListener("click", function () {
    pantalla.textContent += letra;
  });

  teclado.appendChild(tecla);
}

for (let i = 0; i <= 9; i++) {

  let tecla = document.createElement("div");
  tecla.classList.add("tecla");
  tecla.textContent = i;

  if (i % 3 === 0 && i !== 0) {
    tecla.classList.add("numero-multiplo3");
  }
  else if (i % 2 === 0) {
    tecla.classList.add("numero-par");
  }
  else {
    tecla.classList.add("numero-impar");
  }

  tecla.addEventListener("click", function () {
    pantalla.textContent += i;
  });

  teclado.appendChild(tecla);
}

document.getElementById("enviar").addEventListener("click", function () {
  alert("Texto enviado: " + pantalla.textContent);
  pantalla.textContent = "";
});
