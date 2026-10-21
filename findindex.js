const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];
const posicionPera = frutas.findIndex(fruta => fruta === 'pera');
const posicionLarga = frutas.findIndex(fruta => fruta.length > 5);
console.log("Posición de pera:", posicionPera);
console.log("Primera fruta con más de 5 letras:", posicionLarga);