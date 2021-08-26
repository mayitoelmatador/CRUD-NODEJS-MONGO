const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    marcaCamara:String,
    modeloCamara:String,
    marcaPelicula:String,
    nombrePelicula:String,
    sesibilidadIsoPelicula:String,
    formatoPelicula:String,
    direccionServicio:String,
    pegatinaReferencia:String,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('tasks',TaskSchema);