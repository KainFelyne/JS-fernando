var persona = {
    nombre: "Brownie",
    apellido: "Gato",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido)
    },
    direccion:{
        pais: "México",
        obtenerPais: function(){
            //console.log(this)
            console.log("La dirección es en: " + this.pais);

            var nuevaDireccion = function(){
                console.log(this);
            }
            
            nuevaDireccion();
        }
    }
}

persona.nombre = "Missi"

persona.imprimirNombre()

persona.direccion.obtenerPais()