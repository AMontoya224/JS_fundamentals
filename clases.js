class Persona{
    constructor( nombre, apellido, edad ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    imprimeDatos(){
        console.log( this.nombre, this.apellido, this.edad )
    }
}

class Estudiante extends Persona{
    constructor( nombre, apellido, edad, programa, instructor ){
        super( nombre, apellido, edad );
        this.programa = programa;
        this.instructor = instructor;
    }

    imprimeDatos(){
        super.imprimeDatos();
        console.log( this.programa, this.instructor )
    }
}

let alex = new Persona( "Alex", "Martinez", 28 );
let ana = new Persona( "Ana", "Lopez", 30 );

console.log( alex );
console.log( ana );

alex.imprimeDatos();
ana.imprimeDatos();

let alan = new Estudiante( "Alan", "Perez", 25, "Python", "Marco" )

alan.imprimeDatos();

let jose = new Estudiante( alex, "Python", "Marco" );

jose.imprimeDatos();