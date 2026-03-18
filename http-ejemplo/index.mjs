import http from 'http'; 

// Crear el servidor HTTP 
const server = http.createServer((req, res) => {
    // Definimos que la respuesta fue exitosa (código 200)
    res.statusCode = 200;
    
    // Configuramos que el contenido que vamos a enviar es texto plano 
    res.setHeader('Content-Type', 'text/plain');
    
    // Enviamos el mensaje final y cerramos la conexión 
    res.end('¡Hola, Mundo! Este es mi primer servidor en Node.js');
});

// Configuramos el puerto donde escuchará el servidor por ej 300
const port = 3000;
const ip = '127.0.0.1'; // mi computadora

server.listen(port, ip, () => {
    console.log(`Servidor corriendo en http://${ip}:${port}/`); // 
});