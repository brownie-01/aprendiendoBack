// for (let index = 0; index < array.length; index++) {
//     const element = array[index]
//     const resultado = 0 + number(element)
//     return resultado
// }

function sumarArray(array){
    let acumuladora = 0
    for (let index = 0; index < array.length; index++) {
    let elementActual = array[index];
    acumuladora = acumuladora + elementActual 
}
return acumuladora
}

let resultado =sumarArray([1,2,3,4])

console.log(resultado)

// Escribe una función que tome un string como parámetro y devuelva el mismo string pero con todas las letras en mayúscula. Por ejemplo, si la función recibe el string "hola mundo", debe devolver "HOLA MUNDO".


const convirtiendo = function(cadena) {
    let cadenaMayuscula = cadena.toUpperCase()
    return cadenaMayuscula
}
let asiTeGusta = convirtiendo("hola mundo")
console.log(asiTeGusta)

// Escribe una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto. Por ejemplo, si la función recibe el objeto {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}, debe devolver 3.
let objeto = {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}
const reconvirtiendo = function(paremeto) {
    let resultado = Object.keys(objeto)
    return resultado.length
}

console.log(reconvirtiendo(objeto))

// Escribe una función que tome un número como parámetro y devuelva un array con todos los números enteros desde 1 hasta el número pasado como parámetro. Por ejemplo, si la función recibe el número 5, debe devolver el array [1, 2, 3, 4, 5].



const contandohasta = function(pum) {
    let array = []
    for (let i = 0; i <= pum ; i++) {
        array.push(i)
    }
    return array
}

const resultad =contandohasta(7)
console.log(resultad)


let especial = 1;

 switch (especial) {
    case (1):
        console.log("es unooo")
        break;
    case (2):
        console.log("es dosssss")
        break;
 
    default:
        console.log("oo uuunno o dds putittaaa")
        break;
 }