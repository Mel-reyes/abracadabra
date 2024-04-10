const express = require('express');
const path = require('path');

const app = express();

// Crear servidor en puerto 3000
app.listen(3000, () => {
    console.log(`Server running on port 3000 and PID: ${process.pid}`)
})

//  assets como carpeta pública del servidor
app.use(express.static(path.join(__dirname, 'assets')));

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Arreglo de nombres
const usuarios = {
    usuarios: [
        'Juan',
        'Jocelyn',
        'Astrid',
        'María',
        'Ignacia',
        'Javier',
        'Brian'
    ]
};

// Ruta GET para devolver arreglo de usuarios en formato JSON
app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios);
});

// Middleware 
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const nombre = req.params.usuario;
    const usuario = usuarios.usuarios.find(elemento => elemento == nombre);
    usuario ? next() : res.sendFile(path.join(__dirname, 'assets', 'who.jpeg'));
});

// Ruta usuario
app.get('/abracadabra/juego/:usuario', (req, res) => {
    const nombre = req.params.usuario;
    res.send(`<center><h1>Usuario/a: ${nombre} autentificado/a</h1></center>`);
});

// Ruta conejo
app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = Math.floor(Math.random() * 4) + 1; // Random de 1 a 4
    const numero = req.params.n;
    const rutaImagen = numero == n ? 'conejito.jpg' : 'voldemort.jpg';
    res.sendFile(path.join(__dirname, 'assets', rutaImagen));
});

//ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” 
app.get('*', (req, res) => {
    res.send("<center><h1>Esta página no existe...</h1></center>");
});