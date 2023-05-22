

let a = 5;

if ( a >= 10) { // boolean o undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes... y asi sucesisavemtne

console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ){
    console.log('Lunes')
    // if ( dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes ni domingo');
}

// Sin usar If Else, o switch, únicamente
dia = 6;
// con objeto
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

console.log( diasLetras[dia] || 'Día no valido');

 // con arreglo
const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log( diasLetras2[dia] );