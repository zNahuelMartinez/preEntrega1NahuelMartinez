class Alumno {
    constructor(nombre, tri1, tri2, tri3, promedio) {
      this.nombre = nombre;
      this.tri1 = tri1;
      this.tri2 = tri2;
      this.tri3 = tri3;
      this.promedio = promedio;
    }
  }
 
 //  Array
  const Alumnos = [];
  
  let cantAlumn;
  
 //       // Verificar si la entrada es válida
  while (true) {
     cantAlumn = parseInt(prompt("Cuántos alumnos van a ingresar al sistema?"));
 //      // Si  tira error vuelve a preguntar hasta que sea valido
    if (!isNaN(cantAlumn) && cantAlumn !== "") {
      break;
    } else {
      alert("Valor no válido, por favor ingrese un número.");
    }
  }
  
  //    // Ciclo para ingresar los datos de las alumnos
  for (let i = 0; i < cantAlumn; i++) {
    let promedioAux = 0;
    const nombre = prompt("Ingrese el nombre");
    const tri1 = parseFloat(prompt("Ingrese la nota del 1er trimestre"));
    const tri2 = parseFloat(prompt("Ingrese la nota del 2do trimestre"));
    const tri3 = parseFloat(prompt("Ingrese la nota del 3er trimestre"));
  
    promedioAux = tri1 + tri2 + tri3;
    promedio = promedioAux / 3;
 
  //        // Verificar si los datos ingresados son válidos
    if (isNaN(tri1 && tri2 && tri3) || tri1 === "" || tri2 === "" || tri3 === "" || nombre === "" || !isNaN(nombre) ) {
      alert("Uno de los datos ingresados no es válido. En nombre solo letras y en trimestre solo números.");
      i = i - 1;
    } else {
      if (tri1 > 10 || tri2 > 10 || tri3 > 10) {
        alert("La nota debe ser entre 0 y 10");
        i = i - 1;
      } else {
        const alum = new Alumno(nombre, tri1, tri2, tri3, promedio);
        Alumnos.push(alum);
      }
    }
  }
  
  //         // Función para alumnos aprobados
  const filtroAprobados = (alum) => alum.promedio >= 7;
  const alumnosAprobados = Alumnos.filter(filtroAprobados);
  
  console.log("Alumnos aprobados: \n");
  for (const aprobados of alumnosAprobados) {
    console.log(alert(`El alumno: ${aprobados.nombre} tiene un promedio de: ${aprobados.promedio} y esta aprobado`));
  }

  //         // Función para alumnos desaprobados
  const filtroDesaprobados = (alum) => alum.promedio <= 7;
  const alumnosDesaprobados = Alumnos.filter(filtroDesaprobados);
    
  console.log("Alumnos desaprobados: \n");
  for (const desaprobados of alumnosDesaprobados) {
    console.log(alert(`El alumno: ${desaprobados.nombre} tiene un promedio de: ${desaprobados.promedio} y esta desaprobado`));
  }

  console.log("Todos los alumnos: \n");
  console.log(Alumnos);
  

