// const arr = new Array(10);

// const arr = [];
// console.log( arr );

let cartasMitos = [ 'Rey Arturo Pendragón', 'El Gran Zeús', 'Daana', 'Ra' ];
console.log( { cartasMitos } );

console.log( cartasMitos[0] );

let arregloCosas = [
    true,
    123,
    'Ivan',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Cody',
        'Lunerda'
    ]]
];

// console.log( arregloCosas );
// console.log( arregloCosas[2] );
console.log( arregloCosas[7][4][1] );