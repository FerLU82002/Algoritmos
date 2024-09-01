//Ejercicios Pseudocódigo

//Ejercicios 01. Dados 10 números enteros que se ingresan por teclado, calcular cuántos de ellos son pares, cuánto suman ellos y el promedio de los impares.

 variables
    numero : entero
    pares : entero
    sumaPares : entero
    impares : entero
    sumaImpares : entero
    promedioImpares : real
    i : entero

inicio
    pares = 0
    sumaPares = 0
    impares = 0
    sumaImpares = 0
    promedioImpares = 0

    para i = 1 hasta 10 hacer
        escribir("Ingrese un número: ")
        leer(numero)
        si numero % 2 == 0 entonces
            pares = pares + 1
            sumaPares = sumaPares + numero
        sino
            impares = impares + 1
            sumaImpares = sumaImpares + numero
        finSi
    finPara

    si impares > 0 entonces
        promedioImpares = sumaImpares / impares
    finSi
    escribir("Cantidad de números pares: ", pares)
    escribir("Suma de los números pares: ", sumaPares)
    escribir("Promedio de los números impares: ", promedioImpares)

fin

// Realizar un algoritmo en pseudocódigo para freír un huevo.
variables
    huevo : entero
    aceite : entero
    sarten : entero
    fuego : entero
    tiempo : entero

inicio
    escribir("Colocar aceite en la sartén")
    leer(aceite)
    escribir("Encender el fuego")
    leer(fuego)
    escribir("Esperar a que el aceite esté caliente")
    escribir("Colocar el huevo en la sartén")
    leer(huevo)
    escribir("Esperar a que el huevo esté cocido")
    escribir("Retirar el huevo de la sartén")
    escribir("Apagar el fuego")
    leer(fuego)
fin 

//Hacer unpseudocódigo que imprima los números del 1 al 100 en orden decreciente
variables
    i : entero 
inicio
    para i = 100 hasta 1 hacer
        escribir(i)
    finPara
fin

// Realizar un algoritmo en pseudocódigo que al introducir un número por teclado, nos
// diga si es positivo o negativo.

variables
    numero : entero
inicio
    escribir("Ingrese un número: ")
    leer(numero)
    si numero > 0 entonces
        escribir("El número es positivo")
    sino
        escribir("El número es negativo")
    finSi
fin

//Realizar un algoritmo para definir el proceso de alistarse de una persona desde que se
//levanta.

variables
    levantarse : entero
    aseo : entero
    desayuno : entero
    vestirse : entero
    salir : entero
inicio
    escribir("Levantarse de la cama")
    leer(levantarse)
    escribir("Realizar aseo personal")
    leer(aseo)
    escribir("Desayunar")
    leer(desayuno)
    escribir("Vestirse")
    leer(vestirse)
    escribir("Salir de casa")
    leer(salir)
fin


