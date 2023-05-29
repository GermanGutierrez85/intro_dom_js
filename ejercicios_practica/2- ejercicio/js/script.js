"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/
// 1)
let btn1 = document.getElementById("boton1")
let btn2 = document.getElementById("boton2")
let btn3 = document.getElementById("boton3")

btn1.textContent = "COPIAR"
btn2.textContent = "CORTAR"
btn3.textContent = "PEGAR"

// 2)
const btnStyles = document.querySelectorAll(".btn");
/* console.log(btnStyle); */

btnStyles[0].classList.add("electricidad");
btnStyles[1].classList.add("electricidad");
btnStyles[2].classList.add("electricidad");
