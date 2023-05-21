function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('soy un código que está después del return');
}

const saludar2 = function( nombre ) {
    console.log('Hola Mundoxxxx ' + nombre );
}

const saludarFlecha = () => {
    console.log( 'Hola Flecha ');
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola' + nombre);
}

const retornoDeSaludar = saludar( 'Banchi', 40, 'Casado', 'Costa Rica' ); // 1

// saludar2( 'Banchi P' );

// saludarFlecha();
// saludarFlecha2( ' Flecha 2 ' );

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

// Transformar la funcion de arriba en una funcion de flecha, que no tenga llaves
const getAleatorio2 = () => Math.random();

console.log( sumar(1,2) );
console.log( sumar2(2,2) );

console.log( getAleatorio() );
console.log( getAleatorio2() );