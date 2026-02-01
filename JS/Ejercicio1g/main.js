// Ejercicio 1g.1

const numeros = [1,2,3,4,5]

function sumaNumerosPares(numeros){
    let suma =0

    for(const numero of numeros){
        if(numero % 2 == 0){
            suma += numero
        }
    }
    return suma
}

console.log('Ejercicio 1g.1 =', sumaNumerosPares(numeros))

//Ejercicio 1g.2

const cadena = 'Hola Mundo'

function eliminarConsonantes(cadenaInput){
    let vocales =''
    const cadenaArray = cadenaInput.toLowerCase().split ('')
    
    for(const letra of cadenaArray){
        if(letra == 'a'|| letra == 'ae'|| letra == 'i'|| letra == 'o'|| letra == 'u'){
            vocales += letra
        }
    }

    return vocales
}

console.log ('Ejercicio 1g.2 =' , eliminarConsonantes(cadena))

//Ejercicio 1g.3

function CelsiusAFarenheit (gradosCelsius){
    return (gradosCelsius *(9/5) +32)
}
console.log('Ejercicio 1g.3 =', CelsiusAFarenheit (20))