//var carlos = new persona();





function Persona(){

    this.nombre = "Juan"
    this.apellido = "Johnson"
    this.edad = 30

    this.nombreCompleto = function(){
        return this.nombre +" " + this.apellido
    }
    

}

var juan = new Persona()
console.log(juan.nombre)
console.log(juan.edad)
console.log(juan.nombreCompleto())