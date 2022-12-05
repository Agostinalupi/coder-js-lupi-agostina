

let usuario = prompt("Ingrese su nombre de usuario");
console.log("nombre de usuario " + usuario);

let password = parseInt(prompt("Ingrese su contraseña"));
console.log("contraseña:  " + password);

for (let i = 1; i <= 3; i++) {
    if ((usuario == "agoslupi") && (password == "0000")) {
        alert("Bienvenido " + usuario + "");
        break;
    }
    else if ((usuario == "pepe") && (password == "1111")) {
        alert("Bienvenido " + usuario + "");
        break;
    }
    else if ((usuario == "laura") && (password == "2222")) {
        alert("Bienvenido " + usuario + "");
        break;
    }
    else {
        alert("Usuario y/o contraseña incorrectas😒");
        break;
    }
    usuario = prompt("Ingrese su nombre de usuario");
    password = parseInt(prompt("Ingrese su contraseña"));
}

let producto = prompt("Ingrese el producto deseado, para salir escriba terminar");
while (producto != "terminar") {
    switch (producto) {
        case "bananas":
            alert("El precio por kilo de las bananas es $350");
            break;
        case "manzanas":
            alert("El precio por kilo de las manzanas es $300");
            break;
        case "peras":
            alert("El precio por kilo de las peras es $400");
            break;
        case "frutillas":
            alert("El precio por kilo de las frutillas es $600");
            break;
        case "naranjas":
            alert("El precio por kilo de las naranjas es $250");
            break;
        default: 
        alert("No contamos con el producto deseado");
    
    }
    producto = prompt("Ingrese el producto deseado");

}

function calcularDescuento (precio) {
 let totalDescuento = precio * 0.9
 alert("El precio total con el descuento del 10% es $"+totalDescuento);
}

for(let i=1;i<5;i++) {
    let precioProducto = parseFloat(prompt("ingresa el precio del producto"));
    calcularDescuento(precioProducto);
}