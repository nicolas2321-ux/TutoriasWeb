const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mi-database', { useNewUrlParser: true, useUnifiedTopology: true });

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Resto de tu configuración de Express...
