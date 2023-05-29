"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/
const fireStyle = document.querySelectorAll(".btn");

fireStyle[0].addEventListener("click", function(){
    fireStyle[0].classList.add("fuego");
});
fireStyle[1].addEventListener("click", function(){
    fireStyle[1].classList.add("fuego");
});
fireStyle[2].addEventListener("click", function(){
    fireStyle[2].classList.add("fuego");
});

//Esta 2da opcion se la copie a Facu Mangin para ver como funcionaba xD

/* fireStyle.forEach(function(fireStyle){
    fireStyle.addEventListener("click",function(){
        fireStyle.classList.add("fuego");
    });
}); */