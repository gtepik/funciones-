const personas = [
    { nombre: 'Ana', edad: 17, ciudad: 'México' },
    { nombre: 'Luis', edad: 22, ciudad: 'Madrid' },
    { nombre: 'Pedro', edad: 25, ciudad: 'México' },
    { nombre: 'Maria', edad: 30, ciudad: 'Madrid' }
];
const mayores = personas.filter(persona => persona.edad > 18);
const hayMadrid = personas.some(persona => persona.ciudad === 'Madrid');
const todosMayores = personas.every(persona => persona.edad >= 18);
const personaMexico = personas.find(persona => persona.ciudad === 'México');
const posicionAna = personas.findIndex(persona => persona.nombre === 'Ana');
console.log("Personas mayores de 18:", mayores);
console.log("¿Hay alguien de Madrid?", hayMadrid);
console.log("¿Todos son mayores de edad?", todosMayores);
console.log("Primera persona de México:", personaMexico);
console.log("Posición de Ana:", posicionAna);