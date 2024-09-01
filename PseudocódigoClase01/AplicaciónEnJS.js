//Ejercicios 01. Dados 10 números enteros que se ingresan por teclado, calcular cuántos de ellos son pares, cuánto suman ellos y el promedio de los impares.
function Ejercicios01() {
    // Declaración de variables
    let numero = 0;
    let contadorPares = 0;
    let sumaPares = 0;
    let contadorImpares = 0;
    let sumaImpares = 0;
    let promedioImpares = 0;

    // Ingreso de datos
    for (let i = 0; i < 10; i++) {
        numero = parseInt(prompt("Ingrese un número"));
        if (numero % 2 == 0) {
            contadorPares++;
            sumaPares += numero;
        } else {
            contadorImpares++;
            sumaImpares += numero;
        }
    }

    // Calcular promedio de impares
    if (contadorImpares > 0) {
        promedioImpares = sumaImpares / contadorImpares;
    }

    // Mostrar resultados
    console.log("Cantidad de pares: " + contadorPares);
    console.log("Suma de los pares: " + sumaPares);
    console.log("Promedio de los impares: " + promedioImpares);
    alert("Cantidad de pares: " + contadorPares + "\n" + "Suma de los pares: " + sumaPares + "\n" + "Promedio de los impares: " + promedioImpares);
}


// Función para freír un huevo
function ejercicio2() {
    console.log("Colocar aceite en la sartén");
    alert("Colocar aceite en la sartén");
    let aceite = prompt("Confirma que has colocado el aceite:");
    
    console.log("Encender el fuego");
    alert("Encender el fuego");
    let fuego = prompt("Confirma que has encendido el fuego:");
    
    console.log("Esperar a que el aceite esté caliente");
    alert("Esperar a que el aceite esté caliente");
    console.log("Colocar el huevo en la sartén");
    alert("Colocar el huevo en la sartén");
    let huevo = prompt("Confirma que has colocado el huevo:");
    
    console.log("Esperar a que el huevo esté cocido");
    alert("Esperar a que el huevo esté cocido");
    console.log("Retirar el huevo de la sartén");
    alert("Retirar el huevo de la sartén");
    
    console.log("Apagar el fuego");
    alert("Apagar el fuego");
    
    fuego = prompt("Confirma que has apagado el fuego:");
}

// Función para imprimir números del 100 al 1
function ejercicio3() {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
    alert("Se han impreso los números del 100 al 1 en la consola");
}

// Función para determinar si un número es positivo o negativo
function ejercicio4() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero > 0) {
        console.log("El número es positivo");
        alert("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
        alert("El número es negativo");
    } else {
        console.log("El número es cero");
        alert("El número es cero");
    }
}

// Función para el proceso de cepillarse los dientes
function ejercicio5() {
    alert("Tomar el cepillo de dientes");
    alert("Aplicar pasta dental al cepillo");
    alert("Mojar el cepillo con agua");
    alert("Cepillar los dientes durante 2 minutos");
    alert("Enjuagar la boca con agua");
    alert("Escupir el agua");
    alert("Limpiar el cepillo");
}
