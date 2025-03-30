const mongoose = require('mongoose');

const enderecoSchema = new mongoose.Schema({

  cep: { type: String, required: true, match: /^\d{5}-?\d{3}$/ },
  logradouro: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: String,
  bairro: String,
  cidade: { type: String, required: true },
  estado: { type: String, required: true, match: /^[A-Z]{2}$/ }

});

const pacienteSchema = new mongoose.Schema({

  cpfPaciente: { type: String, required: true, unique: true, match: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/ },
  nomePaciente: { type: String, required: true, minlength: 3 },
  dataNascimento: { type: String, required: true, match: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/ },
  emailPaciente: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
  senhaPaciente: { type: String, required: true, minlength: 8 },
  telefonePaciente: { type: String, required: true, match: /^(\+55)?[\s-]?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/ },
  enderecoPaciente: { type: enderecoSchema, required: true },
  generoPaciente: {
    type: String,
    enum: ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'],
    required: true
  }

});

module.exports = mongoose.model('Paciente', pacienteSchema);