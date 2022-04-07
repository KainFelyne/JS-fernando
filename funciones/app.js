var a = 30

function primeraFuncion(){
    
    
    var a = 20 // Si no existe la variable "a" dentro de la función, lo toma del entorno global

    console.log(a)
}

primeraFuncion()


function segundaFuncion(){
    
}

var b = segundaFuncion()

console.log(b)