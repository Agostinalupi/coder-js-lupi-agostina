

let usuario = prompt("Ingrese su nombre de usuario");
console.log("Nombre de usuario " + usuario);

let password = parseInt(prompt("Ingrese su contraseña"));
console.log("contraseña:  " + password);

if ((usuario == "agoslupi") && (password == "0000")) {
    alert("Bienvenido agoslupi");
}
else {
    alert("Usuario no autorizado");
}

function calcularDescuento (precio) {
 let totalDescuento = precio * 0.9
 alert("el precio total con el descuento del 10% es $"+totalDescuento);
}

for(let i=1;i<5;i++) {
    let precioProducto = parseFloat(prompt("ingresa el precio del producto"));
    calcularDescuento(precioProducto);
}