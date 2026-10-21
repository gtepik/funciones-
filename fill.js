let letras = ['a', 'b', 'c', 'd', 'e'];
let primera = [...letras];
primera.fill('x', 0, 3);
let otra = [...letras];
otra.fill('z', 2, 5);
console.log("Primera posicion:", primera);
console.log("Otra posicion:", otra);