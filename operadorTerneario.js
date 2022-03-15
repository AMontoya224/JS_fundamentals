let resultado;
let calificacion = 5;



if( calificacion >= 8 ){
    resultado = "Aprobaste";
}
else{
    resultado = "Jalaste";
}

console.log( resultado );


let resultadoTerneario = ( calificacion >= 8 ) ? "Aprobaste" : "Jalaste";

console.log( resultadoTerneario );


let resultadoTernearioSino = ( calificacion >= 8 ) ? "Aprobaste" :
                             ( calificacion == 5 ) ? "Incierto" : "Jalaste";

console.log( resultadoTernearioSino );