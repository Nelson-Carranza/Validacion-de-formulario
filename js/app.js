import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
//El forEach()método ejecuta una función proporcionada una vez para cada elemento de la matriz.
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
