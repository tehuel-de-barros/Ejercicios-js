// let num1 = Number(prompt("Ingrese un numero que sera sumado hasta ser igual a num2,este numero se sumara de 1 en 1 "));
// let num2 = Number(prompt("Ingrese su num2"));

// while (num1 < num2) { 
//     num1++;
//     alert(num1);
// }




// a)
/* let lavarLosPlatos = prompt("Hijo ya lavaste los platos?");
let resul = lavarLosPlatos.toLocaleLowerCase();
 
if(resul === "si")  {
    let teBañaste = prompt("Y te bañaste");
    let result = teBañaste.toLocaleLowerCase();
    if (result === "si") {
        alert("Entonces ya mismo anda a dormir");
    }else{
        alert("Hacelo y anda a dormir")
    }
}
else {
    alert("Ya mismo hacelo")
} */


/* Script que pida string(pueden ser numeros pero en forma de string), hasta pulsar "cancelar" y
cuando eso pase que salga en forma de alerta todos esos string  */
// b)
/* let concatenacion = "";
do {
    let cadena = prompt("Introduce una palabra o numero");
    //Como concatenacion va a estar vacio,no contcatenamos el guion
    if (concatenacion == "") {
        concatenacion = concatenacion + cadena;
    }
    else {
        concatenacion = `${concatenacion} - ${cadena}`;
    }
} while (confirm("¿Seguir?"));
alert(concatenacion);
 */

// c)
// function carrito() {
//     const productos = [];
//     let producto = prompt('¿que desea comprar?');
//     productos.push(producto);

//     while (confirm('¿Desea agregar otro elemento al carro?')) {
//         let producto = prompt('¿que mas desea comprar?');
//         productos.push(producto);
//     } 
//     console.log('Usted compro:')
//     for (let lista of productos) {
//         console.log(lista);
//     }
// }

// carrito();

// const productos = [
//     {nombre: ""}, 
// ];

// let nombre = prompt("Que desea comprar?");

// let producto = {nombre: nombre};
// productos.push(producto);

// while(confirm("¿Desea otro producto mas?")) { 
//     let nombre = prompt("¿Que mas desea comprar?");
//     let producto = {nombre: nombre};
//     productos.push(producto);
// }
// console.log('Usted compro:')
//     for (let lista of productos) {
//         console.log(lista);
//     }


// class Productos{ 
//     constructor(nombre){
//         this.nombre = nombre;
//         // this.precio = precio;
//     }
// }

// const product = [];
// let nombre = prompt("Que desea comprar?");
// let producto = new Productos(nombre);
// product.push(producto);

// while(confirm("¿Desea otro producto mas?")) { 
//     let nombre = prompt("¿Que mas desea comprar?");
//     let producto = new Productos(nombre);
//     product.push(producto);
// }

// console.log('Usted compro:')
//     for(let lista of product) { 
//         console.log(lista);
//     }
    // El for in me indica la posicion en el array
 /*    for(let lista in product) { 
        console.log(lista); 
    }  */ 
    
    
    /* let pc = [
        { id: 1, nombres: "intel", precio: 1000 },
        { id: 2, nombres: "amd", precio: 1100 },
        { id: 3, nombres: "msi", precio: 1200 },
        { id: 4, nombres: "corsair", precio: 100 },
        { id: 5, nombres: "delta", precio: 1100 },
    ];
    let nombres = prompt("Ingrese el nombre del producto");
    let productos = pc.find(item => item.nombres === nombres);
    if(productos === undefined){
    alert("PC desconocida, o no encontrada");
    }else{
    let info = `
    Nombre: ${productos.nombres}
    Codigo de referencia: ${productos.id}
    Precio: $${productos.precio}
    `;
    alert(info);
    }
    console.log(pc
        ); */

        //  hola() => { 
            // let pc = [
            //     { id: 1, nombres: "intel", precio: 1000 },
            //     { id: 2, nombres: "amd", precio: 1100 },
            //     { id: 3, nombres: "msi", precio: 1200 },
            //     { id: 4, nombres: "corsair", precio: 100 },
            //     { id: 5, nombres: "delta", precio: 1100 },
            // ];
            // let nombres = prompt("Ingrese el nombre del producto");
            // let productos = pc.find(item => item.nombres === nombres);
            // if(productos === undefined){
            // alert("PC desconocida, o no encontrada");
            // }else{
            // let info = `
            // Nombre: ${productos.nombres}
            // Codigo de referencia: ${productos.id}
            // Precio: $${productos.precio}
            // `;
            // alert(info);
            // }
            // console.log(pc);
        // }

        // hola();

        const catalogo = () => {
            let pc = [
                { id: 1, nombres: "intel", precio: 1000 },
                { id: 2, nombres: "amd", precio: 1100 },
                { id: 3, nombres: "msi", precio: 1200 },
                { id: 4, nombres: "corsair", precio: 100 },
                { id: 5, nombres: "delta", precio: 1100 },
            ];
            let nombres = prompt("Ingrese el nombre del producto");
            let productos = pc.find(item => item.nombres === nombres);
            if(productos === undefined){
            alert("PC desconocida, o no encontrada");
            }else{
            let info = `
            Nombre: ${productos.nombres}
            Codigo de referencia: ${productos.id}
            Precio: $${productos.precio}
            `;
            alert(info);
            }
            console.log(pc
                );
        }

        catalogo();