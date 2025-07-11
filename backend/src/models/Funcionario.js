const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: {
        type:String,
        unique:false,
        required:true
    },
    sobrenome: {
        type: String,
        unique: false,
        required:false
    },
    email: {
        type: String,
        unique:true,
        required:true,
    },
    senha: {
        type: String,
        unique:false,
        required: true,
    },
    roles: [
        {
            type:String,
            default: "ROLE_FUNC"
        }
    ]
}, {timestamps: true, id: true});

const model = mongoose.model("Funcionario", schema);

module.exports = model;