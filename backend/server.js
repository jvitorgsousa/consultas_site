require('./config/db');


const express = require('express');
const app = express();
const port = 3000;

const pacienteRouter = require('./api/Paciente');
const consultaRouter = require('./api/Consulta');
const medicoRouter = require('./api/Medico');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Salus Care',
      version: '0.0.',
      description: 'Documentação da API do sistema Salus Care, que agrega as entidades paciente, médico, consulta'
    },
    servers: [
      {
        url: 'http://localhost:2222/api'
      }
    ]
  },
  apis: ['./api/*.js'], 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

// routers
app.use('/api/paciente', pacienteRouter);
app.use('/api/consulta', consultaRouter);
app.use('/api/medico', medicoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
