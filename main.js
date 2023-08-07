
console.log(funcionesAir)
const selectPeliculas = document.getElementById('opciones');
const selectHorarios = document.getElementById('lang');
const cantidadEntradas = document.getElementById('cantidad');
const aComprar = document.getElementById('comprar')

const ticket1 = new Object()


function crearOpciones() {
    //Con esta fn recorremos el array de peliculas//
    cartelera.forEach((pelicula) => {
        const opcion = document.createElement('option'); //Variable para crear un nuevo elemento donde estan las opciones//
        opcion.value = pelicula.opcion; //Con esta variable asignamos el id de la pelicula como valor a la variable opcion//
        opcion.text = pelicula.nombre; //Con esta variable asignamos el nombre de la pelicula como texto a la variable opcion//
        selectPeliculas.appendChild(opcion); //Para añadir los resultados de valor y texto al select de opciones, pero como un hijo//
    });
}


function limpiarOpcionesHorarios(){
    selectHorarios.innerHTML = ''; // Para limpiar las opciones al cambiar//

}


function costoEntradas (valorFuncion){
    console.log(valorFuncion.precio)
    ticket1.precio = valorFuncion.precio;
    cantidadEntradas.addEventListener('change', (event) => {

        const cantidadSeleccionada = Number(event.target.value);
        console.log(cantidadSeleccionada)
        ticket1.cantidad = cantidadSeleccionada
        datosPelicula.qEntradas = cantidadSeleccionada //3ro cantidad de entradas //
        let totalEntradas = cantidadSeleccionada * valorFuncion.precio;
        console.log(totalEntradas)
        datosPelicula.mEntradas = totalEntradas //4to Total entradas//
    })

}


selectPeliculas.addEventListener('change', (event) => { //El evento al momento de cambiar//
    limpiarOpcionesHorarios(); //Al cambiar elimine el horario previamente añadido//

    const opcionSeleccionada = parseInt(event.target.value); //Obtener el valor de cada seleccion, que ser ael id de la pelicula//
    console.log(opcionSeleccionada)

    const nombrePelicula = cartelera.find((pelicula) => pelicula.opcion === opcionSeleccionada)
    console.log(nombrePelicula.nombre)
    ticket1.nombre = nombrePelicula.nombre
    // carritoPelicula.push(nombre)
    datosPelicula.name = nombrePelicula.nombre //1ro nombre//

    // const opcion = document.createElement('option')
    // opcion.value = valor = funcion.id;
    // opcion.text = text = funcion.horario;
    // selectHorarios.appendChild(opcion)

    if(opcionSeleccionada == 1) {
        funcionesAir.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 2){
        funcionesElementos.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 3){
        flash.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 4){
        evil.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 5){
        gotg.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
        selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 6){
        transf.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
        selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 7){
        indy.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 8){
        boogey.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 9){
        mario.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 10){
        favor.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 11){
        barbie.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})
    } else if (opcionSeleccionada == 12){
        openheimer.forEach((funcion) => {
            const opcion = document.createElement('option')
            opcion.value = funcion.id;
            opcion.text = funcion.horario;
            selectHorarios.appendChild(opcion);})


}})

selectHorarios.addEventListener('change', (event) => {
    const funcionSeleccionada = event.target.value;
    console.log(funcionSeleccionada)
    const horarioFuncion = funciones.find( funcion => funcion.id == funcionSeleccionada);
    console.log(horarioFuncion.horario)
    ticket1.id = funcionSeleccionada;
    ticket1.horario = horarioFuncion.horario;
    // carritoPelicula.push(funcionSeleccionada)
    datosPelicula.hora = funcionSeleccionada //2do horario //

    const valorFuncion = funciones.find( funcion => funcion.id == funcionSeleccionada);
    costoEntradas(valorFuncion)
    // carritoPelicula.push(valorFuncion)
})

// aComprar.addEventListener('click', (event) => {
// const resumen = document.createElement('a')
// resumen.textContent = "Comprar ya!";
// resumen.setAttribute("href","../resumen/resumen.html");
// aComprar.appendChild(resumen)

let datosPelicula = new Object();
let carritoPelicula = []

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })



const formularioContacto = document.getElementById("formularioContacto");


// formularioContacto.addEventListener("submit", (e) => {
// 	e.preventDefault();
//     const peliculaElegida = cartelera.find((pelicula) => pelicula.opcion === parseInt(selectPeliculas.value));
//     console.log(peliculaElegida);
// 	const ticket = {
// 		nombre: peliculaElegida.nombre,
// 		horario: selectHorarios.value,
// 		cantidad: cantidadEntradas.value,
// 	};
//     carritoPelicula.push(ticket);
// 	localStorage.setItem("carrito", JSON.stringify(carritoPelicula));
// 	location.href = "./resumen/resumen.html";
// })

formularioContacto.addEventListener("submit", alertaEntradas)
function alertaEntradas (e) {
    
    e.preventDefault();

    swalWithBootstrapButtons.fire({
        title: 'Estas seguro de tu eleccion?',
        text: "Confirma tus elecciones para continuar con el proceso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, estoy seguro',
        cancelButtonText: 'No',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Bien!',
            'Vamos a llevarte a la parte final del proceso!.',
            'success'
          )
          resumenEntradas();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Selecciona de nuevo!',
            'Volverás al menú anterior!',
            'error'
          )
        }
      })
}

function resumenEntradas (){
    
    const peliculaElegida = cartelera.find((pelicula) => pelicula.opcion === parseInt(selectPeliculas.value));
    console.log(peliculaElegida);
	// const ticket = {
	// 	nombre: peliculaElegida.nombre,
	// 	horario: selectHorarios.value,
	// 	cantidad: cantidadEntradas.value,
    //     // precio: valorFuncion.value,
	// };
    carritoPelicula.push(ticket1);
	localStorage.setItem("carrito", JSON.stringify(carritoPelicula));
	location.href = "./dulces.html";
}

// console.log(datosPelicula)
// localStorage.setItem('datos', carritoPelicula)
// localStorage.setItem('seleccion', datosPelicula)

// let recuperoPeliculas1 = JSON.stringify(datosPelicula)
// localStorage.setItem('seleccion', recuperoPeliculas1)

// let recuperoPeliculas2 = localStorage.getItem('seleccion')
// let recuperoPeliculas3 = JSON.parse(recuperoPeliculas2)




// console.log(datosPelicula)


// carritoPelicula.push(datosPelicula)
// console.log(carritoPelicula)



crearOpciones();




// localStorage.setItem('nombre', 'La pelicula que escogiste es ' + nombrePelicula.nombre);
// localStorage.setItem('horario', 'El horario que escogiste es a las ' + funcionSeleccionada);
// localStorage.setItem('cantidad', 'Haz escogido ' + cantidadSeleccionada + " entradas." );
// localStorage.setItem('total entradas', 'El total a pagar por entradas es ' + totalEntradas);

// let nombre = localStorage.getItem('nombre')
// let horario = localStorage.getItem('horario')
// let cantidad = localStorage.getItem('cantidad')
// let entradas = localStorage.getItem('total entradas')
// console.log(nombre)
// console.log(horario)
// console.log(cantidad)
// console.log(entradas)