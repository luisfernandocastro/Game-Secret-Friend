// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    
    let nombreAmigo = document.querySelector('input');
    let textoMensaje = document.getElementById('mensajeError');

    if (!nombreAmigo.value == " ") {

        if(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreAmigo.value)){

            amigos.push(nombreAmigo.value);
            console.log(amigos);
            mensaje(textoMensaje, '');
        }else{
            //alert("Solo se permiten letras");
            mensaje(textoMensaje, 'Solo se permiten letras');
        }
    }else{
        //alert("Por favor, inserte un nombre");
        mensaje(textoMensaje, 'Por favor, inserte un nombre');

    }
    nombreAmigo.value = '';

}


function mensaje(elemento, texto){

    elemento.innerHTML = texto;
    
}