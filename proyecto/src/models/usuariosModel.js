import mongoose from "mongoose";
import { db } from "../database/mongo";
mongoose.connect('mongodb://localhost:27017/mi-database');


const usuarioSchema = new mongoose.Schema({
    nombre: String,
    usuario: String,
});
export const Usuario = mongoose.model("Usuario", usuarioSchema);