// let num1 = Number(prompt("Ingrese un numero que sera sumado hasta ser igual a num2,este numero se sumara de 1 en 1 "));
// let num2 = Number(prompt("Ingrese su num2"));

// while (num1 < num2) { 
//     num1++;
//     alert(num1);
// }


/* Script que pida string(pueden ser numeros pero en forma de string), hasta pulsar "cancelar" y
cuandoeso pase que salga en forma de alerta todos esos string  */

let concatenacion = "";
// let res[];
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
