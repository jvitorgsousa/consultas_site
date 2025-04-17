const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({

    crmMedico: { type: String, required: true, match: /^\d{6}-\d{2}\/[A-Z]{2}$/ },
    nomeMedico: { type: String, required: true, minlength: 3},
    sobrenomeMedico: { type: String, required: true, minlength: 3},
    especialidadeMedico: { type: String, required: true},
    descricaoMedico: { type: String },
    data_disponibilidade: { type: String, required: true, match: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/ },
    hora_disponibilidade: { type: String, required: true, match:  /^([01]\d|2[0-3]):([0-5]\d)$/ }
})

 module.exports = mongoose.model('Medico', medicoSchema);

 