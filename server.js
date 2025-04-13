const express = require('express');
const app = express();
const port = 3000;

const pacienteRouter = require('./api/Paciente');

module.exports = { app };

app.use(express.json());
app.use('/api/paciente', pacienteRouter);

const startServer = async () => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
};

if (require.main === module) {
  const db = require('./config/db');
  db.connectDB().then(() => startServer());
}