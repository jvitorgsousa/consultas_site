const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    
    consultaID: { type: mongoose.Schema.Types.ObjectId, unique: true},
    cpfPacienteConsulta: { type: String, required: true, match: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/},
    crmMedico: { type: String, required: true, match: /^\d{6}-\d{2}\/[A-Z]{2}$/ },
    dataConsulta: { type: String, required: true, match: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/ },
    horaConsulta: { type: String, required: true, match:  /^([01]\d|2[0-3]):([0-5]\d)$/ },
    statusConsulta: { type: String, enum: ['Agendada', 'Realizada', 'Cancelada'], default: 'Agendada' },
    descricaoConsulta: { type: String }

 });

consultaSchema.pre('save', function(next){
    if(!this.consultaID) {
        this.consultaID = this._id;
    }
    next();
})

 module.exports = mongoose.model('Consulta', consultaSchema);