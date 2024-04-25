const mongoose = require("mongoose"); // importando el componente mogoose
const verifyToken = require('../routes/validate_token');
const animalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: false,
    }
});
module.exports = mongoose.model("Animal", animalSchema);
