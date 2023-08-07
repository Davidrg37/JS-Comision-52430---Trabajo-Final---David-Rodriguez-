const combosAñadir = document.getElementById("pagar1");

combosAñadir.addEventListener("click", (e) => {
    location.href = "./resumen/resumen.html";

})


const ordenCombos = new Object()
const ordenComida = new Object()
const combosOrden = []
const comidaOrden = []

let btn1 = document.querySelector("#mostrarCombos")
btn1.addEventListener('click', () => 
    {
    fetch('datos/combos.json')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res)
        renderCombos(res)
    })
    .catch((err) => {
        // console.log(err)
    })
})

function renderCombos(menuCombos){
    const opcCombos = document.querySelector('#opc2')

    let html = "";

    menuCombos.forEach(({opcion, nombre, precio}) => {
        html += `
            <div>
                
                <p>${nombre}. El precio es de ${precio}</p>

            </div>
            <hr>`
    })
    opcCombos.innerHTML = html
}

// Hasta aca la opcion de de mostrar combos y empieza la parte de seleccionar //

const selectCombos = document.getElementById('opciones-combos');

function opcionesCombos() {
    //Con esta fn recorremos el array de peliculas//
    combos.forEach((opcionCombos) => {
        const opcion = document.createElement('option'); //Variable para crear un nuevo elemento donde estan las opciones//
        opcion.value = opcionCombos.opcion; //Con esta variable asignamos el id de la pelicula como valor a la variable opcion//
        opcion.text = opcionCombos.titulo; //Con esta variable asignamos el nombre de la pelicula como texto a la variable opcion//
        selectCombos.appendChild(opcion); //Para añadir los resultados de valor y texto al select de opciones, pero como un hijo//
    });
}


function limpiarOpcionesHorarios(){
    selectHorarios.innerHTML = ''; // Para limpiar las opciones al cambiar//

}

const cantidadCombos = document.getElementById('cantidadCombos');


function costoCombos (precioCombo, comboSeleccionado){
    console.log(precioCombo.precio)

    cantidadCombos.addEventListener('change', (event) => {

        selectCantidad = Number(event.target.value);
        console.log(selectCantidad) //5to cantidad de combos//
        ordenCombos.cantidad = selectCantidad;
        console.log(ordenCombos.cantidad)
        ordenCombos.cantidad = selectCantidad;

        // cantidad = selectComida;
        // combosOrden.push(cantidad)
        // ticket1.cantidad = cantidadSeleccionada
        // datosPelicula.qEntradas = cantidadSeleccionada //3ro cantidad de entradas //
        let totalCombos = selectCantidad * precioCombo.precio;
        console.log(totalCombos)
        ordenCombos.total = totalCombos;
        console.log(ordenCombos.total);

    })



}





selectCombos.addEventListener('change', (event) => {

    // limpiarOpcionesHorarios();
    menuSeleccionado = parseInt(event.target.value); //Obtener el valor de cada seleccion, que ser ael id de la pelicula//
    console.log(menuSeleccionado) //1ro opcion del combo//
    ordenCombos.id = menuSeleccionado;
    console.log(ordenCombos.id)
    
    const comboNombre = combos.find((menu) => menu.opcion === menuSeleccionado)
    console.log(comboNombre.nombre) //2do Nombre del combo//
    console.log(comboNombre.titulo) //3ro Nombre del combo//


    const precioCombo = combos.find((menu) => menu.opcion == menuSeleccionado);
    console.log(precioCombo.precio) // 4to precio del combo//
    costoCombos(precioCombo, menuSeleccionado)

})

const formularioCombos = document.getElementById("formularioCombos");


formularioCombos.addEventListener("submit", crearOrdenCombos)

function crearOrdenCombos(e){
    e.preventDefault();
    console.log(ordenCombos)
    menuSeleccionado = ordenCombos.id;
    console.log(menuSeleccionado)

    cantidad1 = ordenCombos.cantidad;
    console.log(cantidad1)
    
    if(menuSeleccionado==1){
        menu1.cantidad = cantidad1;
        combosOrden.push(menu1)
    } else if (menuSeleccionado == 2){
        menu2.cantidad = cantidad1;
        combosOrden.push(menu2)
    } else if (menuSeleccionado == 3){
        menu3.cantidad = cantidad1;
        combosOrden.push(menu3)
    } else if (menuSeleccionado == 4){
        menu4.cantidad = cantidad1;
        combosOrden.push(menu4)
    } else if (menuSeleccionado == 5){
        menu5.cantidad = cantidad1;
        combosOrden.push(menu5)
    } else if (menuSeleccionado == 6){
        menu6.cantidad = cantidad1;
        combosOrden.push(menu6)
    }

    console.log(combosOrden)


}

opcionesCombos();

// Hasta aca la opcion de escoger combos //
// Inicio de mostar opciones de comidas y bebidas

let btn2 = document.querySelector("#mostrarComida")
btn2.addEventListener('click', () => 
    {
    fetch('datos/detallado.json')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res)
        renderComida(res)
    })
    .catch((err) => {
        // console.log(err)
    })
})

function renderComida(menuComida){
    const opcComida = document.querySelector('#opc4')

    let html = "";

    menuComida.forEach(({title, nombre, precio}) => {
        html += `
            <div>
            <p>La ${title}: ${nombre}. El precio es de ${precio}</p>
            </div>
            <hr>`
    })
    opcComida.innerHTML = html
}



// Hasta aca la opcion de mostrar comidas y bebidas //
// Inicio de escoger opciones de comidas y bebida //
const selectComida = document.getElementById('opciones-comida');

function opcionesComida() {
    //Con esta fn recorremos el array de peliculas//
    comidas.forEach((opcionComida) => {
        const opcion = document.createElement('option'); //Variable para crear un nuevo elemento donde estan las opciones//
        opcion.value = opcionComida.id; //Con esta variable asignamos el id de la pelicula como valor a la variable opcion//
        opcion.text = opcionComida.title; //Con esta variable asignamos el nombre de la pelicula como texto a la variable opcion//
        selectComida.appendChild(opcion); //Para añadir los resultados de valor y texto al select de opciones, pero como un hijo//
    });
}

const cantidadComida = document.getElementById('cantidadComida');

function costoComida (precioComida){
    console.log(precioComida.precio)

    cantidadComida.addEventListener('change', (event) => {

        const selectCantidad2 = Number(event.target.value);
        console.log(selectCantidad2) //5to cantidad de combos//
        // ticket1.cantidad = cantidadSeleccionada
        // datosPelicula.qEntradas = cantidadSeleccionada //3ro cantidad de entradas //
        ordenComida.cantidad = selectCantidad2;
        console.log(ordenComida.cantidad)


        let totalCombos = selectCantidad2 * precioComida.precio;
        console.log(totalCombos)

    })
}

selectComida.addEventListener('change', (event) => {

    // limpiarOpcionesHorarios();
    const comidaSeleccionada = parseInt(event.target.value); //Obtener el valor de cada seleccion, que ser ael id de la pelicula//
    console.log(comidaSeleccionada) //1ro opcion de la comida//
    ordenComida.id = comidaSeleccionada;
    console.log(ordenComida.id)

    const comidaNombre = comidas.find((opc) => opc.id === comidaSeleccionada)
    console.log(comidaNombre.title) //2do Nombre de la comida//
    console.log(comidaNombre.concepto) //3ro Nombre de la comida//


    const precioComida = comidas.find((opc) => opc.id == comidaSeleccionada);
    console.log(precioComida.precio) // 4to precio del combo//
   costoComida(precioComida)

})


function limpiarOpcione(){
    selectHorarios.innerHTML = ''; // Para limpiar las opciones al cambiar//

}

const formularioComida = document.getElementById("formularioComida");


formularioComida.addEventListener("submit", crearOrdenComida)

function crearOrdenComida(e){
    e.preventDefault();
    console.log(ordenComida)
    comidaSeleccionada = ordenComida.id;
    console.log(comidaSeleccionada)

    cantidad2 = ordenComida.cantidad;
    console.log(cantidad2)
    
    if(comidaSeleccionada==1){
        opc1.cantidad = cantidad2;
        combosOrden.push(opc1)
    } else if (comidaSeleccionada==2){
        opc2.cantidad = cantidad2;
        combosOrden.push(opc2)
    } else if (comidaSeleccionada==3){
        opc3.cantidad = cantidad2;
        combosOrden.push(opc3)
    }else if (comidaSeleccionada==4){
        opc4.cantidad = cantidad2;
        combosOrden.push(opc4)
    }else if (comidaSeleccionada==5){
        opc5.cantidad = cantidad2;
        combosOrden.push(opc5)
    }else if (comidaSeleccionada==6){
        opc6.cantidad = cantidad2;
        combosOrden.push(opc6)
    }else if (comidaSeleccionada==7){
        opc7.cantidad = cantidad2;
        combosOrden.push(opc7)
    }else if (comidaSeleccionada==8){
        opc8.cantidad = cantidad2;
        combosOrden.push(opc8)
    } else if (comidaSeleccionada==9){
        opc9.cantidad = cantidad2;
        combosOrden.push(opc9)
    }


    console.log(combosOrden)


}


opcionesComida();

const combosAñadir1 = document.getElementById("pagar2");
combosAñadir1.addEventListener("submit", (e) => {

    e.preventDefault();
    localStorage.setItem("orden", JSON.stringify(combosOrden));
    location.href = "./resumen/resumen.html";
    
})

// Hasta aca la opcion de escoger comidas y bebidas //