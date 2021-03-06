import { Schema, model } from "mongoose";

const docenteSchema = new Schema({
    numero_actividad: {
        type: Number,
        unique: true
    },
    titulo: {
        type: String,
    },
    descripcion: {
        type: String
    },
    puntos: {
        type: Number
    },
    urlArchivo: {
        type: String
    },
    materia: [{
        ref: "Materia",
        type: Schema.Types.ObjectId
    }],
},
{
    timestamps: true,
    versionKey: false,
}
);




export default model('Docente', docenteSchema);