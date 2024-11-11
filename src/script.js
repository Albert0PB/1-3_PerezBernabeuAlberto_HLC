{
/*
Escribe un ejemplo de cada una de estas asignaciones con destructuring:
	Destructuring de objetos:

       	    Asignación simple de los atributos de un objeto
*/
const objeto1 = { atributo1: "atributo1", atributo2: "atributo2" };
let { atributo1, atributo2 } = objeto1;
console.log(`Primer atributo: ${atributo1}. Segundo atributo: ${atributo2}.`);

/*
            Asignación simple de los atributos de un objeto cambiando el nombre a las variables
*/
const objeto2 = { primerAtributo: "atributo1", segundoAtributo: "atributo2" };
let { segundoAtributo, primerAtributo } = objeto2;
console.log(`Primer atributo: ${segundoAtributo}. Segundo atributo: ${primerAtributo}.`);

/*
            Asignación de un valor anidado dentro de un objeto
*/
const objetoAnidado = { atributo: {atributoAnidado: "atributo anidado"} };
let { atributo: { atributoAnidado } } = objetoAnidado;
console.log(`Atributo anidado: ${atributoAnidado}`);

/*
            Asignación con valores por defecto en caso de no existir en los parámetros de una función
*/
const objetoValoresDefecto = { atributoExistente: "existo" };
let {atributoExistente, atributoValorDefecto = "valor por defecto" } = objetoValoresDefecto;
console.log(`Atributo existente: '${atributoExistente}'. Atributo con valor por defecto '${atributoValorDefecto}'.`);

/*
            Valores por defecto en los parámetros de una función. Invoca varias veces y sin argumentos
*/

const saludar = function( nombre="Mundo" ) {
    console.log(`Hola ${nombre}`);
}

saludar("Alberto");
saludar("terrícolas");
saludar();

/*
            Asignación de los valores de un objeto devuelto por una función
*/
const devolverValores = function() {
    return {primerValor: "primer valor", segundoValor: "segundo valor"};
}
let { primerValor, segundoValor } = devolverValores();
console.log(`Primer valor devuelto: ${primerValor}. Segundo valor devuelto: ${segundoValor}.`);

/*
        Destructuring de arrays:

            Asignación del primer y del último elemento de un array
*/
const array1 = [1,2,3,4,5];
let [primerElemento,,,,ultimoElemento] = array1;
console.log(`Primer elemento del array: ${primerElemento}. Último elemento del array: ${ultimoElemento}.`);

/*
            Asignación del primer y del resto de elementos de un array (rest operator)
*/
const array2 = [1,2,3,4,5];
let [elementoPrimeraPosicion, ...restoElementos] = array2;
console.log(`Primer elemento del array: ${elementoPrimeraPosicion}. Resto de elementos: '${restoElementos.join(', ')}'.`);

/*
            Asignación de un valor anidado dentro de un array
*/
const array3 = [1, [2]];
let [elementoNoAnidado, [elementoAnidado]] = array3;
console.log(`Valor no anidado: ${elementoNoAnidado}. Valor anidado: ${elementoAnidado}.`);

/*
            Intercambio de variables
*/
let x = 1;
let y = 2;
[y,x] = [x,y];

/*
            Asignación de los valores de un array devuelto por una función
*/
const devolverArray = function() {
    return ["valor1", "valor2"];
}

let [primerValorArray, segundoValorArray] = devolverArray();
console.log(`Primer valor en el array devuelto por función: ${primerValorArray}.`);
console.log(`Segundo valor en el array devuelto por función: ${segundoValorArray}`);

/*
    Utiliza la destructuración en estos ejercicios, así como los template literals:
        Escribe una función llamada muestraNombre() que tome un objeto como argumento (4 propiedades) e imprima el nombre y apellido de la persona. 
*/
const Persona = {
    nombre: "Alberto",
    apellido: "Pérez",
    edad: 21,
    localidad: "Córdoba"
};

const muestraNombre = function ( persona ) {
    let { nombre, apellido, ...otros } = persona;
    return `${nombre} ${apellido}`;
}
console.log( muestraNombre(Persona) );

/*
        Considere el siguiente array colores: let colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"]; 
        Usando la desestructuración de matrices, asigne los primeros 2 elementos a las variables primerColor y segundoColor y 
        asigna los elementos restantes a la variable otrosColores. Muestra los valores de estas 3 variables por consola
*/

const colores = ["blanco", "azul", "amarillo", "negro", "rojo", "verde"];
let [primerColor, segundoColor, ...otrosColores] = colores;

console.log(`Primer color: ${primerColor}.`);
console.log(`Segundo color: ${segundoColor}.`);
console.log(`Otros colores: ${otrosColores}.`);

/*
        Crea una función denominada irTerceraHora() que acepte un objeto desestructurado como parámetro. 
        El parámetro extrae la propiedad "terceraHora" del objeto. La función debe devolver esta declaración: "¡Hora de ir a clase de {tercera}!"
*/
const misClases = {
    primera: "Diseño ",
    segunda: "Diseño ",
    tercera: "Servidor", 
    cuarta: "Servidor",
    quinta: "Cliente",
    sexta: "Cliente"
  };

const irTerceraHora = function ( clases ) {
    let { primeraHora, segundaHora, terceraHora, ...demasHoras } = [misClases.primera, misClases.segunda, misClases.tercera ];
    console.log(`¡Hora de ir a clase de ${terceraHora}!`);
}

irTerceraHora();

}