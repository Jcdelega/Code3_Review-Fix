// Tenemos un listaProductos de productos           /* The file was formatted to read it easily */

const productos = [
  { 
    nombre: "Zapato negro",                         /* The image addres of each object was changed */
    tipo: "zapato", 
    color: "negro", 
    img: "/images/taco-negro.jpg" 
  },
  { 
    nombre: "Zapato azul", 
    tipo: "zapato", 
    color: "azul", 
    img: "/images/taco-azul.jpg" 
  },
  { 
    nombre: "Bota negra", 
    tipo: "bota", 
    color: "negro", 
    img: "/images/bota-negra.jpg" 
  },
  { 
    nombre: "Bota azul", 
    tipo: "bota", 
    color: "azul", 
    img: "/images/bota-azul.jpg" 
  },
  { 
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo", 
    img: "/images/zapato-rojo.jpg" 
  }
]

const listaProductos = document.getElementById("lista-de-productos");       /* .getElementById is the correct selector It was renamed*/
const botonFiltro = document.querySelector("input");

for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div")
  d.classList.add("producto")

  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre

  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  listaProductos.appendChild(d)
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = botonFiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    listaProductos.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  