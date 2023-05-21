let ediciones = ['Espada Sagrada', 'Hélenica', 'Hijos de Daana', 'Dominios de Ra'];
console.log('Largo:', ediciones.length);

let primero = ediciones[ 2 - 2 ];
let ultimo = ediciones[ ediciones.length - 1 ];

console.log({ primero, ultimo });

ediciones.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = ediciones.push( 'Cruzadas' ); //añade uno nuevo al final del arreglo
console.log({ nuevaLongitud, ediciones });

nuevaLongitud = ediciones.unshift( 'Imperio' ); // añade uno nuevo al principio del arreglo
console.log({ nuevaLongitud, ediciones });

let juegoBorrado = ediciones.pop() // borra el ultimo
console.log({ juegoBorrado, ediciones });


let pos = 1;

console.log( ediciones );
let edicionesBorradas = ediciones.splice( pos, 2 );
console.log({ edicionesBorradas, ediciones });

let hddIndex = ediciones.indexOf( 'Hijos de Daana' ); // Case sensitive
console.log({ hddIndex });

// TODO: Referencia