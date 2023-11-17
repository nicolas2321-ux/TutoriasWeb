import app from "./src/app.js"
import fs from 'fs'
import https from 'https'
import mongoose from "mongoose"

const main = () => {

    app.listen(app.get("port"))
    console.log(`server on port ${app.get("port")}`)
    mongoose.connect('mongodb://localhost:27017/mi-database');
    const db =  mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
        console.log('Conectado a MongoDB');
    });

}

main();