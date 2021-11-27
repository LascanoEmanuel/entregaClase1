
let nombre = prompt('Ingrese su nombre?')
let apellido= prompt('Ingrese su apellido')
alert('Bienvenido' + " "+ nombre + " " + apellido)
let edad = +prompt('Ingrese su edad')
edad = Number(edad)

if (edad < 18){
    alert('Usted no puede estar en este sitio')
    throw new Error('Es menor')
    }
    else {
        alert('Bienvendio' + " " + nombre)
    }



