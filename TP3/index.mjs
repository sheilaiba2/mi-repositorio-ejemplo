import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// 1. Agregar los nuevos héroes al archivo original
agregarSuperheroes(archivoOriginal, archivoNuevos);

// 2. Leer la lista ya actualizada y mostrarla ordenada 
const superheroes = leerSuperheroes(archivoOriginal);
console.log('--- Lista Completa y Ordenada ---'); 
console.table(superheroes); 