
let productos = [
    {
    nombre: "Camisa",
    precio: 20,
    descuento: [
        { cantidad: 5, porcentaje: 10 },
        { cantidad: 10, porcentaje: 20 }
    ]
    },
    {
    nombre: "Pantalón",
    precio: 30,
    descuento: [
        { cantidad: 3, porcentaje: 5 },
        { cantidad: 5, porcentaje: 10 },
        { cantidad: 10, porcentaje: 15 }
    ]
    },
    {
    nombre: "Zapatos",
    precio: 50,
    descuento: [
        { cantidad: 2, porcentaje: 5 },
        { cantidad: 5, porcentaje: 10 },
        { cantidad: 10, porcentaje: 20 }
    ]
    }
];


function aplicarDescuento(producto, cantidad) {
    let descuento = 0;
    for (let i = 0; i < producto.descuento.length; i++) {
    if (cantidad >= producto.descuento[i].cantidad) {
        descuento = producto.descuento[i].porcentaje;
    } else {
        break;
    }
    }
    return producto.precio * cantidad * (1 - descuento / 100);
}

let compra = [];
let continuar = true;
while (continuar) {
    let seleccion = prompt("Seleccione un producto (1: Camisa, 2: Pantalón, 3: Zapatos) o escriba 'fin' para terminar:");
    if (seleccion === "fin") {
    continuar = false;
    } else if (seleccion >= 1 && seleccion <= 3) {
    let producto = productos[seleccion - 1];
    let cantidad = parseInt(prompt("Ingrese la cantidad de " + producto.nombre + " que desea comprar:"));
    compra.push({ producto: producto, cantidad: cantidad });
    } else {
    alert("Selección inválida. Por favor, seleccione un producto válido.");
    }
}


let total = compra.reduce(function(acumulado, item) {
    return acumulado + aplicarDescuento(item.producto, item.cantidad);
}, 0);


alert("Total de la compra: " + total + "Pesos");