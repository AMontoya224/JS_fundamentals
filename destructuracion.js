




let estudiante = {
    nombre : "Andres",
    apellido : "Montoya",
    edad : 25,
    calificaciones : [9, 5.5, 6],
    curso : [
        {
            stack : "Python",
            calificacion : 9.8
        },
        {
            stack : "Java",
            calificacion : 9.45
        },
        {
            stack : "MERN",
            calificacion : 9.9
        }
    ]
}

console.log( estudiante["edad"] );
console.log( estudiante.edad );

let { nombre, apellido, edad, calificaciones, curso } = estudiante;  // los nombres de las variables tienen que ser igual que las propiedades
console.log( nombre, apellido, edad, calificaciones );
console.log( calificaciones[1] );

console.log( estudiante["curso"][1]["stack"] );

let { stack, calificacion } = curso[1];
console.log( stack );

let { curso : [ stack1, stack2 ] } = estudiante;
console.log( stack2 );

let { nombre : nombreAnd } = estudiante;
console.log( nombreAnd, nombre );