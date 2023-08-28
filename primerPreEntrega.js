function calcular() {
    for (let i = 0; i < 3; i++) {
      // Agregamos un loop para permitir hasta 3 cálculos
      // Solicitar al usuario que ingrese el primer número
        const primerNum = parseFloat(prompt("Ingrese el primer número"));
  
        // Solicitar al usuario que ingrese la operación a realizar (+, -, /, )
        const operacion = prompt("Ingrese la operación que desea realizar (+, -, /,)");
  
        // Solicitar al usuario que ingrese el segundo número
        const segundoNum = parseFloat(prompt("Ingrese el segundo número"));
  
        // Verificar si los números ingresados son válidos
        if (isNaN(primerNum) || isNaN(segundoNum)) {
            alert("Error: Ingrese números válidos");
            continue; // Salta a la siguiente iteración del loop para el próximo cálculo
        }
  
        let resultado; // Variable para almacenar el resultado del cálculo
  
        // Realizar el cálculo según la operación ingresada
        switch (operacion) {
            case "+":
                resultado = primerNum + segundoNum;
                break;
  
            case "-":
                resultado = primerNum - segundoNum;
                break;
  
            case "/":
                if (segundoNum !== 0) {
                    resultado = primerNum / segundoNum;
                } else {
                    alert("Error: No se puede dividir por cero");
                    continue; // Salta a la siguiente iteración del loop para el próximo cálculo
                }
                break;
  
            case "*":
                resultado = primerNum * segundoNum;
                break;
  
            default:
                alert("Operación no válida");
                continue; // Salta a la siguiente iteración del loop para el próximo cálculo
        }
  
        // Mostrar el resultado del cálculo al usuario
        alert("El resultado es: " + resultado);
    }
  }
  
  // Llamar a la función para iniciar el proceso de cálculo
  calcular();