var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San José",
        edificio: {
            nombre: "Principal",
            telefono: "2222435465"
        }
    }
}


/* 
###NOTACION DE PUNTO###
console.log(persona.nombre)

console.log(persona.direccion.ciudad)

persona.direccion.codigopostal = 12312; // <- agregar propiedad a un objeto

console.log(persona.direccion.codigopostal)

console.log(persona.direccion.edificio.telefono)

var edificio = persona.direccion.edificio

edificio.piso = "8"

console.log(persona )
*/






//###NOTACION DE CORCHETE###

var campo = "edad"

console.log(persona["nombre"])

console.log(persona["direccion"] ["pais"])

console.log(persona[campo])