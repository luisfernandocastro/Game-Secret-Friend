// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let textoMensaje = document.getElementById('mensajeError');
const listaNombres = document.getElementById('listaAmigos');
const resultadoAmigoSorteado= document.getElementById('amigoSorteado');


function agregarAmigo(){
    
    let nombreAmigo = document.querySelector('input');

    if (!nombreAmigo.value == " ") {

        if(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombreAmigo.value)){

            amigos.push(nombreAmigo.value);
            console.log(amigos);
            mensaje(textoMensaje, '');

            nombreAmigo.focus();

            document.getElementById('button-draw').removeAttribute('disabled'); 

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

function actualizarListaAmigos(){


    listaNombres.innerHTML = '';

    for (const nombreAmigo of amigos) {

        const nuevoelemento = document.createElement('li');
        
        nuevoelemento.textContent = nombreAmigo;

        listaNombres.appendChild(nuevoelemento);

        
    }

}


function sortearAmigo(){
    
    if (amigos.length > 0){
        let amigoSeleccionado = Math.floor(Math.random() * amigos.length) + 1;

        resultadoAmigoSorteado.innerHTML = `El amigo Secreto sorteado es ${amigos[amigoSeleccionado-1]}`;

        console.log(amigoSeleccionado);

        listaNombres.innerHTML = '';

        document.getElementById('container-btn-reiniciar').classList.remove('botonOculto');
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
    document.getElementById('container-btn-reiniciar').classList.add('botonOculto');


    // limpiar lista
    amigos.length = 0;

    // activar boton añadir
    document.getElementById('button-add').removeAttribute('disabled');

}


function mensaje(elemento, texto){

    elemento.innerHTML = texto;
    
}