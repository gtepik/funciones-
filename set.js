const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
const numerosSet = new Set(numerosDuplicados);
const sinDuplicados = [...numerosSet];
numerosSet.add(6);
console.log("Sin duplicados:", sinDuplicados);
console.log("Set con el nuevo número:", numerosSet);
console.log("¿Existe el número 6?", numerosSet.has(6));