var factura = {
    numero: 123,
    fecha: new Date(2022, 0, 1),
    cliente: {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    items: [{
            descripcion: 'Monitor 20"',
            precio: 300
        },
        {
            descripcion: 'Teclado',
            precio: 20
        }
    ]
}

function calcTotal (f){
    var total =0
    for (items of  f.items){
        total += items.precio
    }
    return total
}

console.log(calcTotal(factura))