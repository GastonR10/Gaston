const productos = [
    {
      nombre: "Accesorio1",
      precio: 60,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
      nombre: "Accesorio2",
      precio: 250,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
      nombre: "Accesorio3",
      precio: 300,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
      nombre: "Accesorio4",
      precio: 120,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
      nombre: "Accesorio5",
      precio: 80,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
      nombre: "Accesorio6",
      precio: 280,
      link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
    },
    {
        nombre: "Accesorio7",
        precio: 2320,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
      {
        nombre: "Accesorio8",
        precio: 1080,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
      {
        nombre: "Accesorio9",
        precio: 310,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
      {
        nombre: "Accesorio10",
        precio: 580,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
      {
        nombre: "Accesorio11",
        precio: 220,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
      {
        nombre: "Accesorio12",
        precio: 80,
        link: "https://wetopdogs.com/wp-content/uploads/2020/02/correas-perro-marron-mutiposicion.jpg",
      },
  ];
  const main = document.getElementsByClassName("accesorios2")[0];
  
  const crearYAgregarProducto = (producto)=> {
    const contenedorProducto = document.createElement("div");
    const nombreProducto = document.createElement("h3");
    const imagenProducto = document.createElement("img");
    const precioProducto = document.createElement("p");

    
    contenedorProducto.appendChild(nombreProducto);
    contenedorProducto.appendChild(imagenProducto);
    contenedorProducto.appendChild(precioProducto);

    contenedorProducto.classList.add("producto");
    nombreProducto.textContent = producto.nombre;


    imagenProducto.setAttribute("src", producto.link);
    imagenProducto.setAttribute("alt", producto.nombre);

    precioProducto.textContent = `Precio: $${producto.precio}`;

    main.appendChild(contenedorProducto);
  }

  for (let i = 0; i < productos.length; i++) {
    crearYAgregarProducto(productos[i]);
  }


/* cuadro de comentarios */

function limita(elEvento, maximoCaracteres) {
    let elemento = document.getElementById("texto");

    let evento = elEvento;

    if(elemento.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}

const actualizaInfo = (maximoCaracteres) => {
    let elemento = document.getElementById("texto")
    let info = document.getElementById("info")

    if (elemento.value.length >= maximoCaracteres){
        info.textContent = "Agradecemos nos ayudes a mejorar d??a a d??a";
    } else {
        const difMax = maximoCaracteres - elemento.value.length
        info.textContent = `Te quedan ${difMax} caracteres` 
    }

}


