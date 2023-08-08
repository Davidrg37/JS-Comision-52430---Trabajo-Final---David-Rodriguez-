const carrito = JSON.parse(localStorage.getItem('carrito'))
console.log(carrito)



const tituloPelicula = document.getElementById('part1')
const peliculaNombre = carrito[0].nombre;
tituloPelicula.innerHTML = peliculaNombre

const horaPeliculas = document.getElementById('part2')
const peliculaHora = carrito[0].horario;
horaPeliculas.innerHTML = peliculaHora;

const cantEntradas = document.getElementById('part3')
const entradasPelicula = carrito[0].cantidad
cantEntradas.innerHTML = entradasPelicula + ` entradas.`;

const pagarEntradas = document.getElementById('part4')
const entradasTotal = carrito[0].precio * entradasPelicula;
console.log(entradasTotal)
const totalValue = currency(entradasTotal, {
    symbol: "$",
    pattern: "# !",
    separator: ".",
    decimal: ",",
});
console.log(totalValue.format())

pagarEntradas.innerHTML = totalValue.format();

const formFinal = document.getElementById("enviarCodigo")
const contacto = document.getElementById("part7");


formFinal.addEventListener("click", mensajeFinal) 
async function mensajeFinal(){
const { value: email } = await Swal.fire({
    title: 'Escribe tu mail',
    input: 'email',
    inputLabel: 'Ingresa tu email',
    inputPlaceholder: 'email'
  })
  
  if (email) {
    Swal.fire(`Enviaremos el link de pago para que canceles tus entradas y obtengas el codigo de tus entradas`);
    setTimeout(() =>{ 
        localStorage.clear();
        location.href = "../index.html";
        }, 5000
      )
  }
  
}

const orden = JSON.parse(localStorage.getItem('orden'))
console.log(orden)

const resumenOrden = document.getElementById('part5')

let html = " <p> Tu orden de comida es la siguiente </p> ";

let totalComidaOrden = 0;
let valorTotal = 0;

for(let p=0; p<orden.length; p+=1){
  const cantidad = orden[p].cantidad;
  const titulo = orden[p].titulo;
  const totalComida = orden[p].precio*orden[0].cantidad;

  console.log(totalComida)
  valorTotal+= totalComida;
  console.log(valorTotal)
  totalComidaOrden = totalComida;


  const totalOrden = currency(totalComida, {
    symbol: "$",
    pattern: "# !",
    separator: ".",
    decimal: ",",
})

  console.log(orden[p].titulo)
  console.log(orden[p].cantidad)
  console.log(orden[p].precio)
  console.log('Tu orden es ' + totalOrden.format())

  html += `
  <div>

      <p> Escogiste: Cantidad : ${cantidad} - ${titulo}. El total a pagar por esta ordes es ${totalOrden.format()}</p>

  </div>
  <hr>`

}



resumenOrden.innerHTML = html



const resumenTotal = document.getElementById('part6')

console.log(totalComidaOrden)

const suma = (a, b) => a + b
const total1 = suma;
console.log(total1(entradasTotal, valorTotal));

const totalFinal = currency(total1(entradasTotal, valorTotal), {
  symbol: "$",
  pattern: "# !",
  separator: ".",
  decimal: ",",
})

console.log(totalFinal.format())

resumenTotal.innerHTML = 
`<p> El saldo a pagar es ${totalFinal.format()}</p>`  


