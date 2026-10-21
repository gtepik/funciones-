const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
const caros = productos.filter(producto => producto.precio > 100);
const nombresLargos = productos.filter(producto => producto.nombre.length > 5);
console.log("Productos de más de 100:");
caros.forEach(producto => console.log(producto.nombre));
console.log("Nombres de más de 5 letras:");
nombresLargos.forEach(producto => console.log(producto.nombre));