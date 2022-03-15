let nombres = ["Andres", "Alex", "Jose"];
console.log( nombres );



let nombresCopia1  = nombres;  // no copia en realidad, si no que llama a la misma instancia
nombresCopia1[0] = "Luis";
console.log( nombres );
console.log( nombresCopia1 );

let nombresCopia2  = [];
for( let i=0; i<nombres.length; i++ ){
    nombresCopia2[i] = nombres[i];
}
nombresCopia2[0] = "Jose";
console.log( nombres );
console.log( nombresCopia2 );

let nombresCopia3  = [...nombres];  // spread operator, copia real
nombresCopia3[0] = "Miguel";
console.log( nombres );
console.log( nombresCopia3 );


let estudiante = {
    nombre : "Andres",
    apellido : "Montoya",
    edad : 25
}

let estudianteCopia = {
    ...estudiante,
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

console.log( estudiante );
console.log( estudianteCopia );