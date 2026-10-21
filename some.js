const numeros = [3, 6, 9, ,];
const mayor15 = numeros.some(numero => numero > 15);
const par = numeros.some(numero => numero % 2 === 0);
console.log("si es un número mayor a 15?", mayor15);
console.log("tienes un  número par?", par);