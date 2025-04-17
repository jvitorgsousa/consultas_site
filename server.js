require('./config/db');

const express = require('express');
const app = express();
const port = 3000;

const pacienteRouter = require('./api/Paciente');
const consultaRouter = require('./api/Consulta');
const medicoRouter = require('./api/Medico');

app.use(express.json());

// routers
app.use('/api/paciente', pacienteRouter);
app.use('/api/consulta', consultaRouter);
app.use('/api/medico', medicoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
