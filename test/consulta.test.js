const request = require('supertest');
const app = require('../server.js').app;
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Paciente = require('../models/Medico.js');

let mongoServer;

beforeAll(async () => {
  // Inicia o servidor MongoDB em memória
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Conecta o Mongoose ao servidor em memória
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Desconecta o Mongoose e encerra o servidor MongoDB em memória
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  // Limpa o banco de dados após cada teste
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

describe('Consulta Agendar', () => {
  test('Agendamento Normal', async () => {

    const consultaValida = {
      cpfPacienteConsulta: "123.456.789-00",
      crmMedico: "123456-78/SP",
      dataConsulta: "15/10/2025",
      horaConsulta: "14:30",
      statusConsulta: "Agendada",
      descricaoConsulta: "Consulta de rotina para acompanhamento."
    };
    
    const res = await request(app)
          .post('/api/consulta/agendar')
          .send(consultaValida);
    expect(res.statusCode).toEqual(201);
  });
  test('Falta de Argumentos', async () => {

    const consultaValida = {
      cpfPacienteConsulta: "123.456.789-00",
      crmMedico: "123456-78/SP",
      dataConsulta: "15/10/2025",
      statusConsulta: "Agendada",
      descricaoConsulta: "Consulta de rotina para acompanhamento."
    };
    
    const res = await request(app)
          .post('/api/consulta/agendar')
          .send(consultaValida);
    expect(res.statusCode).toEqual(400);
  });
});
/*
describe('Consulta Desmarcar', () => {
  test('Desmarcar Normal', async () => {

    const consultaValida = {
      cpfPacienteConsulta: "123.456.789-00",
      crmMedico: "123456-78/SP",
      dataConsulta: "15/10/2025",
      horaConsulta: "14:30",
      statusConsulta: "Agendada",
      descricaoConsulta: "Consulta de rotina para acompanhamento."
    };
    
    await request(app)
          .post('/api/consulta/agendar')
          .send(consultaValida);

    const res = await request(app)
          .get('/api/consulta/desmarcar/')
          .send(consultaValida);
    expect(res.statusCode).toEqual(201);
  });
});
*/