import express from 'express';
const app = express();
const PORT = 3000;

// Ruta GET con parámetro de ruta
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Capturamos el parámetro 
    console.log(`ID del usuario recibido: ${userId}`); // Se verá en la terminal 
    res.send(`Perfil del usuario con ID: ${userId}`); // Se verá en el navegador 
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});