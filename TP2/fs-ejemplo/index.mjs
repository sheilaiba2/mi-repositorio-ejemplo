import fs from 'fs';

// 1. Leer un archivo de manera asíncrona
fs.readFile('./data/ejemplo.txt', 'utf8', (err, data) => {
    if (err) throw err; // Si hay un error (ej: no existe el archivo), frena aca
    console.log('Contenido del archivo leído:', data); 

    // 2. Escribir en un nuevo archivo
    // Esto creará un archivo llamado 'nuevoarchivo.txt' con el texto que pongamos abajo
    fs.writeFile('./data/nuevoarchivo.txt', 'Contenido nuevo creado desde Node.js', (err) => {
        if (err) throw err;
        console.log('¡Archivo creado y escrito!');

        // 3. Renombrar un archivo
        // Cambiarle el nombre al archivo que cree recien
        fs.rename('./data/nuevoarchivo.txt', './data/renombrarArchivo.txt', (err) => {
            if (err) throw err;
            console.log('¡Archivo renombrado con éxito!');
        });
    });
});