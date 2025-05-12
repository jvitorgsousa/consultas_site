require('dotenv').config();
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[!] CONECTADO AO BANCO DE DADOS"))
    .catch(err => console.error("[X] ERRO AO CONECTAR COM O BANCO DE DADOS:", err.message));
};

module.exports = {mongoose, connectDB};
