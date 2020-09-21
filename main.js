// Al escribir en el input, deben aparecer solo las tarjetas en donde el nombre del gato coincida con lo escrito.
const form = document.getElementById("formulario")
const nombreGato = document.getElementById("name")
const cards = document.querySelectorAll(".card")

nombreGato.oninput = () => {
    for (let card of cards) {
        const nombre = card.dataset.name.toLowerCase();
        const busquedaUsuario = nombreGato.value.toLowerCase();
        if (nombre.includes(busquedaUsuario)) {
            card.classList.remove('hidden')
        }
        else {
            card.classList.add('hidden')
        }
    }
}

// Al seleccionar un color, deben aparecer solo los gatos del color seleccionado.
const botonesColor = document.querySelectorAll(".botones-color")

for (let boton of botonesColor) {
    boton.onclick = (e) => {
        e.preventDefault()
        for (let card of cards) {
            if (boton.dataset.color === card.dataset.color) {
                card.classList.remove('hidden')
            }
            else if (boton.dataset.color === "todos") {
                card.classList.remove('hidden')
            }
            else {
                card.classList.add('hidden')
            }
        }
    }
}

// Al seleccionar un sexo, deben aparecer solo los gatos del sexo seleccionado.

const filtroSexo = document.querySelectorAll(".sexo")

for (let filtro of filtroSexo) {
    filtro.onclick = () => {
        for (let card of cards) {
            if (filtro.dataset.sex === card.dataset.sex) {
                card.classList.remove('hidden')
            }
            else if (filtro.dataset.sex === 'none') {
                card.classList.add('hidden')
            }
            else {
                card.classList.add('hidden')
            }
        }
    }
}

