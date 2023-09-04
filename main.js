/* alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);
    
const nombre = prompt("Ingrese su nombre.");

if (nombre !== "") {
    alert(`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`);
} else {
    alert("Por favor, ingrese un nombre válido.");
}

alert("Te invitamos a nuestra tienda para elegir lo último en tecnología.");

for (let asesor = 1; asesor <= 3; asesor++) {
    let nombreCliente = prompt("Vuelva a ingresar su nombre y se le asignará un asesor.");
    alert(`${nombreCliente}, su asesor es  ${asesor}.`);
}

let categoria = "";

while (categoria !== "1" && categoria !== "2") {
    categoria = prompt("Ingrese '1' para ver  MacBooks o '2' para ver iPhones").toLowerCase();

    if (categoria === "1") {
        elegirMacBook();
    } else if (categoria === "2") {
        elegiriPhone();
    } else {
        alert("Por favor, ingrese una opción válida ('1' o '2').");
    }
}


function elegirMacBook() {
    let macbookElegido = "";

    while (macbookElegido !== "1" && macbookElegido !== "2" && macbookElegido !== "3") {
        macbookElegido = prompt("Seleccione su MacBook: Ingrese 1 para 'macbookair', 2 'macbookpro' o 3 'macbookpro16'").toLowerCase();

        if (macbookElegido === "1") {
            alert("Ha elegido MacBook Air. Explore nuestras opciones disponibles.");
        } else if (macbookElegido === "2") {
            alert("Ha elegido MacBook Pro. Descubra nuestras variedades.");
        } else if (macbookElegido === "3") {
            alert("Ha elegido MacBook Pro 16 pulgadas. Vea nuestras características destacadas.");
        } else {
            alert("Por favor, seleccione una opción válida ( 1'macbookair', 2 'macbookpro' o 3 'macbookpro16').");
        }
    }
}

function elegiriPhone() {
    let iphoneElegido = "";

    while (iphoneElegido !== "1" && iphoneElegido !== "2" && iphoneElegido !== "3") {
        iphoneElegido = prompt("Seleccione su iPhone: Ingrese 1 para 'iphone 14', 2 'iphone 14 pro' o 3 'iphone 14 pro max'").toLowerCase();

        if (iphoneElegido === "1") {
            alert("Ha elegido iPhone 14. Descubra sus características.");
        } else if (iphoneElegido === "2") {
            alert("Ha elegido iPhone 14 Pro. Explore sus funciones avanzadas.");
        } else if (iphoneElegido === "3") {
            alert("Ha elegido iPhone 14 Pro Max. Descubra su rendimiento excepcional.");
        } else {
            alert("Por favor, seleccione una opción válida ('iphone12', 'iphone12pro' o 'iphone12promax').");
        }
    }
}
 */





























// Mensaje de bienvenida
alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);

// Pregunta al usuario su nombre
const nombre = prompt("Ingrese su nombre.");

if (nombre !== "") {
    alert(`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`);
} else {
    alert("Por favor, ingrese un nombre válido.");
}

// Almacenamiento en localStorage
localStorage.setItem('nombre', nombre);

// Mensaje para elegir categoría
alert("Te invitamos a nuestra tienda para elegir lo último en tecnología.");

for (let asesor = 1; asesor <= 3; asesor++) {
    let nombreCliente = prompt("Vuelva a ingresar su nombre y se le asignará un asesor.");
    alert(`${nombreCliente}, su asesor es ${asesor}.`);
}

let categoria = "";

while (categoria !== "1" && categoria !== "2") {
    categoria = prompt("Ingrese '1' para ver MacBooks o '2' para ver iPhones").toLowerCase();

    if (categoria === "1") {
        elegirMacBook();
    } else if (categoria === "2") {
        elegiriPhone();
    } else {
        alert("Por favor, ingrese una opción válida ('1' o '2').");
    }
}

// Función para elegir MacBook
function elegirMacBook() {
    let macbookElegido = "";

    while (macbookElegido !== "1" && macbookElegido !== "2" && macbookElegido !== "3") {
        macbookElegido = prompt("Seleccione su MacBook: Ingrese 1 para 'MacBook Air', 2 para 'MacBook Pro' o 3 para 'MacBook Pro 16 pulgadas'").toLowerCase();

        if (macbookElegido === "1") {
            alert("Ha elegido MacBook Air. Explore nuestras opciones disponibles.");
        } else if (macbookElegido === "2") {
            alert("Ha elegido MacBook Pro. Descubra nuestras variedades.");
        } else if (macbookElegido === "3") {
            alert("Ha elegido MacBook Pro 16 pulgadas. Vea nuestras características destacadas.");
        } else {
            alert("Por favor, seleccione una opción válida ('1' para 'MacBook Air', '2' para 'MacBook Pro' o '3' para 'MacBook Pro 16 pulgadas').");
        }
    }
    // Almacenar elección en localStorage
    localStorage.setItem('categoria', 'MacBook');
    localStorage.setItem('eleccion', macbookElegido);
}

// Función para elegir iPhone
function elegiriPhone() {
    let iphoneElegido = "";

    while (iphoneElegido !== "1" && iphoneElegido !== "2" && iphoneElegido !== "3") {
        iphoneElegido = prompt("Seleccione su iPhone: Ingrese 1 para 'iPhone 14', 2 para 'iPhone 14 Pro' o 3 para 'iPhone 14 Pro Max'").toLowerCase();

        if (iphoneElegido === "1") {
            alert("Ha elegido iPhone 14. Descubra sus características.");
        } else if (iphoneElegido === "2") {
            alert("Ha elegido iPhone 14 Pro. Explore sus funciones avanzadas.");
        } else if (iphoneElegido === "3") {
            alert("Ha elegido iPhone 14 Pro Max. Descubra su rendimiento excepcional.");
        } else {
            alert("Por favor, seleccione una opción válida ('1' para 'iPhone 14', '2' para 'iPhone 14 Pro' o '3' para 'iPhone 14 Pro Max').");
        }
    }
    // Almacenar elección en localStorage
    localStorage.setItem('categoria', 'iPhone');
    localStorage.setItem('eleccion', iphoneElegido);
}

// Obtener datos almacenados en localStorage
const categoriaAlmacenada = localStorage.getItem('categoria');
const eleccionAlmacenada = localStorage.getItem('eleccion');

if (categoriaAlmacenada && eleccionAlmacenada) {
    alert(`Usted ha elegido la categoría ${categoriaAlmacenada} y la opción ${eleccionAlmacenada}.`);
}