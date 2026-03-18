import EventEmitter from 'events'; 

// 1. Crear una instancia (el "emisor") 
const emisor = new EventEmitter();

// 2. Defino el evento 'saludo' 
// Aca le decimos qué hacer cuando "escuche" el evento
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}! El evento ha sido recibido.`); 
});

// 3. Emitir el evento 'saludo' 
// Aqui disparamos la accion y le mandamos el "nombre", en este caso mundo
console.log('Emitiendo el evento...');
emisor.emit('saludo', 'Mundo');