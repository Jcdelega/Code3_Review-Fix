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

const listaProductos = document.getElementById("listaProductos");       /* .getElementById is the correct selector. The ID was renamed*/
const botonFiltro = document.querySelector("input");
const botonDeFiltro = document.querySelector("button");

const displayProductos = productos =>{                                  /* This for iteration was wrapped in a function called displayProducts */

  for (let i = 0; i < productos.length; i++) {
    const contenedor = document.createElement("div");                     /* The variable d was renamed to contenedor to be readable*/
    contenedor.classList.add("producto");
  
    const titulo = document.createElement("p");                            /*  The name of ti was renamed to be readable */
    titulo.textContent = productos[i].nombre;
  
    const imagen = document.createElement("img");                       /*Some semicolons were added */
    imagen.setAttribute('src', productos[i].img);
  
    contenedor.appendChild(titulo);
    contenedor.appendChild(imagen);
  
    listaProductos.appendChild(contenedor);
  }
}

const filtrado = (productos, texto) => {                                /* Parameter productos = [ ] was changed to productos */                                                         
  return productos.filter(
    item => item.tipo.includes(texto) || item.color.includes(texto)
  );
} 

displayProductos(productos);


botonDeFiltro.onclick = function () {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = botonFiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    contenedor.appendChild(titulo);
    contenedor.appendChild(imagen);

    listaProductos.appendChild(contenedor);
  }
} 