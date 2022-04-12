function obtenerAleatorio() {
    
    return Math.random();
}

console.log(obtenerAleatorio() + 10);


function obtenerNombre(){

    return "Brownie";
}

console.log(obtenerNombre() + " Bonito")

var nombre = obtenerNombre() + " Bonito";

console.log(nombre);

function esMayor(){

    if(obtenerAleatorio() > 0.5){
        return true
    }
    else{
        return false
    }
}

console.log(esMayor());

if(esMayor()){
    console.log(`${obtenerAleatorio()} Es mayor a 0.5`)
}
else{
    console.log(`${obtenerAleatorio()} Es menor a 0.5`)
}



function crearPersona(nombre, apellido){

    return{
        nombre : nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Brownie", "Khaleesi")

console.log(persona)



function crearFuncion(){

    return function(nombre){
        console.log("Me creó " + nombre)

        return function(){
            console.log("Segunda función")
        }
    }
}


var nuevaFuncion = crearFuncion()

var segundaFuncion = nuevaFuncion(persona.nombre)

segundaFuncion();