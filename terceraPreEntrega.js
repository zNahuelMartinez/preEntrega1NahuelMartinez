class Alumno {
  constructor(nombre, tri1, tri2, tri3, promedio) {
    this.nombre = nombre;
    this.tri1 = tri1;
    this.tri2 = tri2;
    this.tri3 = tri3;
    this.promedio = promedio;
  }
}

let Alumnos = [];

function mostrarError(mensaje) {
  const mensajeError = document.getElementById('mensaje-error');
  mensajeError.textContent = mensaje;
}

// Cargar datos de LocalStorage al inicio, si existen
function cargarDatosDesdeLocalStorage() {
  const datosAlumnos = localStorage.getItem('alumnos');
  if (datosAlumnos) {
    Alumnos = JSON.parse(datosAlumnos);
    actualizarLista();
  }
}

// Función para guardar datos en LocalStorage
function guardarDatosEnLocalStorage() {
  localStorage.setItem('alumnos', JSON.stringify(Alumnos));
}

document.getElementById('agregar').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const tri1 = parseFloat(document.getElementById('tri1').value);
  const tri2 = parseFloat(document.getElementById('tri2').value);
  const tri3 = parseFloat(document.getElementById('tri3').value);

  const promedio = (tri1 + tri2 + tri3) / 3;

  if (!nombre || isNaN(tri1) || isNaN(tri2) || isNaN(tri3) || tri1 < 0 || tri1 > 10 || tri2 < 0 || tri2 > 10 || tri3 < 0 || tri3 > 10) {
    mostrarError('Por favor, ingrese datos válidos.');
    return;
  } else {
    document.getElementById('mensaje-error').textContent = ''; // borra el mensaje de error si no hay errores.
  }

  const alum = new Alumno(nombre, tri1, tri2, tri3, promedio);
  Alumnos.push(alum);
  guardarDatosEnLocalStorage(); // Guardar datos en LocalStorage
  
  actualizarLista();
});

function actualizarLista() {
  const listaAlumnos = document.getElementById('lista-alumnos');
  listaAlumnos.innerHTML = '';

  Alumnos.forEach(alumno => {
    const li = document.createElement('li');
    const promedioRedondeado = alumno.promedio.toFixed(1);
    li.textContent = `Nombre: ${alumno.nombre}, Promedio: ${promedioRedondeado}`;
    if (alumno.promedio >= 6) {
      li.style.color = 'green'; // Alumnos aprobados en verde
    } else {
      li.style.color = 'red'; // Alumnos desaprobados en rojo
    }
    listaAlumnos.appendChild(li);
  });
}

document.getElementById('agregar').addEventListener('click', () => {
  //(código existente para agregar alumnos)

  mostrarResetButton(); // Mostrar el botón de reset
  actualizarLista();
});

// Función para mostrar u ocultar el botón de reset
function mostrarResetButton() {
  const resetButton = document.getElementById('reset');
  resetButton.style.display = Alumnos.length > 0 ?  'block' : 'none' ;
}

document.getElementById('reset').addEventListener('click', () => {
  Alumnos.length = 0; // Borrar la lista de alumnos
  guardarDatosEnLocalStorage(); // Actualizar LocalStorage
  actualizarLista();
  mostrarResetButton(); // Ocultar el botón de reset
});

// Cargar datos desde LocalStorage al inicio
cargarDatosDesdeLocalStorage();
