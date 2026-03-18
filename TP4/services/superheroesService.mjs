import SuperheroesFileRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesFileRepository(); 

// obtener un superhéroe por ID 
export function obtenerSuperheroePorId(id) {
    const superheroes = repository.obtenerTodos(); 
    return superheroes.find(hero => hero.id === id);
}

// buscar por cualquier atributo 
export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos(); 
    return superheroes.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()) 
    );
}

// Lógica para los mayores de 30, de la Tierra y con 2+ poderes 
export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos(); 
    return superheroes.filter(hero =>
        hero.edad > 30 && 
        hero.planetaOrigen === 'Tierra' && 
        hero.poder.length >= 2 
    );
}