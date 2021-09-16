const listaTareasU1 = document.getElementById("lista-tareas");

const botonAgregar = document.getElementById("agregar");

const descripcionInput = document.getElementById("tarea");

const prioridadCombox = document.getElementById("prioridad")

const creaerTarea = () => {
    const tareaNueva = document.createElement("li")

    tareaNueva.textContent = descripcionInput.value;

    tareaNueva.classList.add(prioridadCombox.value);

    console.log(prioridadCombox);

    listaTareasU1.appendChild(tareaNueva);
};

botonAgregar.addEventListener("click", creaerTarea);

