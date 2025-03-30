require('./config/db');

const express = require('express');
const app = express();
const port = 3000;

const pacienteRouter = require('./api/Paciente');

app.use(express.json());

app.use('/api/paciente', pacienteRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
