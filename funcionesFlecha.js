function suma( num1, num2 ){
    return num1 + num2;
}


let sumaFlecha = (num1, num2 ) => {
    let resultado =  num1 + num2;
    return resultado;
}

let sumaFlechaUnaInstruccion = (num1, num2 ) => num1 + num2;

let imprimeNombre = nombre => console.log( nombre );

let imprimeSaludo = () => console.log( "Hola" );


let resultado = suma( 20, 50 );
console.log( resultado );

let resultado2 = sumaFlecha( 20, 50 );
console.log( resultado2 );

let resultado3 = sumaFlechaUnaInstruccion( 20, 50 );
console.log( resultado3 );

imprimeNombre( "Andres" );

imprimeSaludo();


let numeros = [10, 20, 30 ];

numeros.forEach( num => console.log( num ));

numeros.forEach( num => {
    let resultado = num + 5;
    console.log( resultado )
});

/*
fetch ( URL, configuration )
    .then( response => {
        // Logica cuando llega respuesta por parte del API
    })
    .then( datos => {
        // Logica para manipular el objeto JSON recibido
    })
    .catch( error => {
        // Que hacer en caso de un error
    });
*/