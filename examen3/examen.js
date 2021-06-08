/* ejercicio 1 */

let edad = prompt('Cual es tu edad?')

if (edad >= 0 || edad >= 12){
    console.log ("Niño")
    alert("Eres un Niño")
}else if (edad >= 13 || edad >= 17){
    console.log ("adolecente")
    alert ("Eres un adolecente")
}else if (edad >= 18 || edad >= 23){
    console.log ("mayor de edad")
    alert ("Eres mayor de edad")
}else if (edad >= 24){
    console.log("adulto")
    alert ("Eres un adulto")
}

/* ejercicio 2 */

for (let i = 1; 1<=200; i = i+1){
    if (1 % 2 === 0){
        console.log(1 + "fizz")
    }else if (i % 1 === 0){
        console.log(1 + "buzz")
    }
}

/* ejercicio 3 */

var helado = 35
var cobVal = 15
let coberturas = prompt ('Cuantas coberturas quieres? 15$ cada una. Maximo 4')

if(coberturas == 0){
    console.log (helado + "total")
}else if (coberturas == 1){
    console.log (helado + cobVal + "total")
}else if (coberturas == 2){
    console.log (helado + [cobVal * 2] + "total")
}else if (coberturas == 3){
    console.log (helado + [cobVal * 3] + "total")
}else if (coberturas == 4){
    console.log (helado + [cobVal * 4] + "total")
}


/* ejercicio 4 */

let menus = prompt ('Que menu quieres? 1, 2, 3, 4')

var men1 = "Melon, Huevos al gusto, Café"
var men2 = "Sandia, Enchiladas, Jugo"
var men3 = "Papaya, Molletes, Jugo"
var men4 = "Manzana, Crepas, Café"

if (menus == 1){
    alert (men1)
    let confirmacion = prompt ('Quieres este menu? si/no')
    if (confirmacion === 'si'){
        alert ("Pedido listo")
    }else if (confirmacion === 'no'){
        alert ("recarga la pagina para escoger otro menu :D")
    }
}else if (menus == 2){
    alert (men2)
    let confirmacion = prompt ('Quieres este menu? si/no')
    if (confirmacion === 'si'){
        alert ("Pedido listo")
    }else if (confirmacion === 'no'){
        alert ("recarga la pagina para escoger otro menu :D")
    }
}else if (menus == 3){
    alert (men3)
    let confirmacion = prompt ('Quieres este menu? si/no')
    if (confirmacion === 'si'){
        alert ("Pedido listo")
    }else if (confirmacion === 'no'){
        alert ("recarga la pagina para escoger otro menu :D")
    }
}else if (menus == 4){
    alert (men4)
    let confirmacion = prompt ('Quieres este menu? si/no')
    if (confirmacion === 'si'){
        alert ("Pedido listo")
    }else if (confirmacion === 'no'){
        alert ("recarga la pagina para escoger otro menu :D")
    }
}

/* ejercicio 5 */

let letra = prompt ('escribe una letra')

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    alert ("Es una vocal")
    console.log("vocal")
}else{
    console.log ("consonante")
    alert("Es consonante")
}