const edades = [18, 22, 30, 25, 19];
const mayores = edades.every(edad => edad >= 18);
const todosPares = edades.every(edad => edad % 2 === 0);
console.log(" tienen 18 o más?", mayores);
console.log("todos son pares?", todosPares);