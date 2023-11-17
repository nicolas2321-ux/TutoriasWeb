// init-db.js

// Conectar a la instancia de MongoDB
const conn = new Mongo();

// Seleccionar la base de datos
const db = conn.getDB("mi-database");

// Crear colecciones, índices, o realizar otras operaciones iniciales
db.createCollection("mi-coleccion");

// Insertar datos iniciales si es necesario
db.miColeccion.insertOne({ clave: "valor" });

// Salir
quit();
