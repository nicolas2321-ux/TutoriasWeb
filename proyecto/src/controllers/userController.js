import { db } from "../database/mongo"
import { Usuario } from "../models/usuariosModel"

export const testController = async (req, res) => {
const usuario = new Usuario({
    nombre: "Juan",
    usuario: "juancho"
})
usuario.save()
const usuarios =  await Usuario.find({})
console.log(usuarios)
res.json(usuarios)

}

export const testController2 = async (req, res) => {
    const usuarios =  await Usuario.find({})
    for (const usuario of usuarios) {
        console.log(usuario.nombre)
        usuario.nombre = "Juancho2"
        usuario.save()
    }
    res.status(200).json({message: "ok"})
}

export const testController3 = async (req, res) => {
    await Usuario.findOneAndDelete({nombre: "Juan"})
    res.status(200).json({message: "ok"})
}