const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear servidor
const app = express();

// conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({extended: true}));

// puerto de la app
const port = process.env.port || 4000;

// importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// definir home
// app.get('/', (req, res) => res.send('Hola Mundo'));

// arrancar la app
app.listen(port, '0.0.0.0', () => serverMessage(port))

function serverMessage(port) {
  console.log(`local server is running at port ${port}`);
}