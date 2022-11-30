function calcularDescuento (precio) {
 let totalDescuento = precio * 0.9
 alert("el precio total con el descuento del 10% es $"+totalDescuento);
}

for(let i=1;i<5;i++) {
    let precioProducto = parseFloat(prompt("ingresa el precio del producto"));
    calcularDescuento(precioProducto);
}