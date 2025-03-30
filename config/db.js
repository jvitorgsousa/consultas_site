require('dotenv').config();
const mongoose = require('mongoose')

const uri = "mongodb+srv://jovitgomesou:zmRAcD3sZGCYrrY2@cluster-salus.j8qw6jf.mongodb.net/?retryWrites=true&w=majority&appName=cluster-salus"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[!] CONECTADO AO BANCO DE DADOS"))
  .catch(err => console.error("[X] ERRO AO CONECTAR COM O BANCO DE DADOS:", err.message));

module.exports = mongoose;
