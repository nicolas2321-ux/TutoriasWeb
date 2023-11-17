import mongoose from "mongoose";
import { db } from "../database/mongo";
import { Usuario } from "./usuariosModel";
mongoose.connect('mongodb://localhost:27017/mi-database');


const tareasSchema = new mongoose.Schema({
    nombre: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});
export const tarea = mongoose.model("Tareas", tareasSchema);