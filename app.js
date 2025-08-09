// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


// VARIABLES
let amigos = [];
let textoMensaje = document.getElementById('mensajeError');
const listaNombres = document.getElementById('listaAmigos');
const resultadoAmigoSorteado= document.getElementById('amigoSorteado');

// funcion para agregar amigos a la lista
function agregarAmigo(){
    
    let nombreAmigo = document.querySelector('input');

    // condicional para verificar que  input no este vacio
    if (!nombreAmigo.value == " ") {
        // condicional para verificar que en el input solo se ingresen solo letras y espacios
        if(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreAmigo.value)){

            amigos.push(nombreAmigo.value.charAt(0).toUpperCase() + nombreAmigo.value.slice(1)); // Capitalizar los nombres
            mensaje(textoMensaje, '');

            nombreAmigo.focus();
            // Activar boton sortear amigo
            document.getElementById('button-draw').removeAttribute('disabled'); 
            // Llamado de la funcion 
            actualizarListaAmigos();

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
// funcion para mostrar los nombres en las listas
function actualizarListaAmigos(){

    listaNombres.innerHTML = ''; // limpiar lista <ul>

    // recorrer Array amigos
    for (const nombreAmigo of amigos) {

        const nuevoelemento = document.createElement('li');
        
        nuevoelemento.textContent = nombreAmigo;

        listaNombres.appendChild(nuevoelemento);

        
    }

}

// funcion para mostrar el amigo seleccionado
function sortearAmigo(){
    
    if (amigos.length > 0){
        let amigoSeleccionado = Math.floor(Math.random() * amigos.length) + 1;

        resultadoAmigoSorteado.innerHTML = `El amigo Secreto sorteado es ${amigos[amigoSeleccionado-1].toUpperCase()}`;

        console.log(amigoSeleccionado);

        listaNombres.innerHTML = '';

        removeClass('container-btn-reiniciar','botonOculto')
        addClass('container-btn-sortear','botonOculto')

        document.getElementById('button-draw').setAttribute('disabled', 'true');
        document.getElementById('button-add').setAttribute('disabled', 'true');

    }else{
        mensaje(textoMensaje, 'No hay amigos para sortear');
    }
}


function reiniciarJuego(){
    // borrar mensaje
    resultadoAmigoSorteado.innerHTML = '';

    // quitar boton reiniciar
    addClass('container-btn-reiniciar','botonOculto')

    // agregar boton sortear
    removeClass('container-btn-sortear','botonOculto')

    // limpiar lista
    amigos.length = 0;

    // activar boton añadir
    document.getElementById('button-add').removeAttribute('disabled');

}


function mensaje(elemento, texto){

    elemento.innerHTML = texto;
    
}

// funciones para quitar y agregar clases desde el ID del elemento

function addClass(id, clase){
    document.getElementById(id).classList.add(clase);
}

function removeClass(id, clase){
    document.getElementById(id).classList.remove(clase);
}