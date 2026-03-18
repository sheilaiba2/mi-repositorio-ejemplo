import os from 'os';

// 1. Obtener la arquitectura del procesador (ej: x64)
console.log('Arquitectura:', os.arch());

// 2. Obtener la plataforma o sistema operativo
console.log('Plataforma:', os.platform());

// 3. Ver la memoria total disponible en el sistema (en bytes)
console.log('Memoria total:', os.totalmem());

// 4. Ver la memoria libre en este momento (en bytes)
console.log('Memoria libre:', os.freemem());

// 5. Ver detalles técnicos de cada núcleo de tu CPU
console.log('Información de la CPU:', os.cpus());