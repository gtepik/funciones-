const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
];
const mayor = alumnos.find(alumno => alumno.edad > 18);
const alumnoLuis = alumnos.find(alumno => alumno.nombre === 'Luis');
console.log("Primer alumno mayor de 18:", mayor);
console.log("Alumno llamado Luis:", alumnoLuis);