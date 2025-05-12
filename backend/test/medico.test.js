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

describe('Testes registro', () => {
  test('Registro Normal', async () => {
    const medicoValido = {
      crmMedico: "123456-78/SP",
      nomeMedico: "João",
      sobrenomeMedico: "Silva",
      especialidadeMedico: "Cardiologia",
      descricaoMedico: "Médico cardiologista com 10 anos de experiência.",
      data_disponibilidade: "15/10/2025",
      hora_disponibilidade: "14:30"
    };
    const res = await request(app)
          .post('/api/medico/registrar_medico')
          .send(medicoValido);
    expect(res.statusCode).toEqual(201);
  });
  test('Falta de argumento', async () => {
    const medicoValido = {
      crmMedico: "123456-78/SP",
      nomeMedico: "João",
      sobrenomeMedico: "Silva",
      descricaoMedico: "Médico cardiologista com 10 anos de experiência.",
      data_disponibilidade: "15/10/2025",
      hora_disponibilidade: "14:30"
    };
    const res = await request(app)
          .post('/api/medico/registrar_medico')
          .send(medicoValido);
    expect(res.statusCode).toEqual(400);
  });
});

describe('Listar Medicos', () => {
  test('Listagem vazia', async () => {
    const res = await request(app)
          .get('/api/medico/listar_medicos')
    expect(res.statusCode).toEqual(200);
  });
  test('Listagem com um medico', async () => {
    const medicoValido = {
      crmMedico: "123456-78/SP",
      nomeMedico: "João",
      sobrenomeMedico: "Silva",
      especialidadeMedico: "Cardiologia",
      descricaoMedico: "Médico cardiologista com 10 anos de experiência.",
      data_disponibilidade: "15/10/2025",
      hora_disponibilidade: "14:30"
    };
    await request(app)
          .post('/api/medico/registrar_medico')
          .send(medicoValido);
    const res = await request(app)
          .get('/api/medico/listar_medicos')
    expect(res.statusCode).toEqual(200);
  });
});

describe('Teste delete', () => {
  test('Delete sem paciente', async () => {
    const res = await request(app)
          .post('/api/medico/deletar/12345')
    expect(res.statusCode).toEqual(404);
  });
  test('Delete normal', async () => {
    const medicoValido = {
      crmMedico: '123456-78/SP',
      nomeMedico: 'João',
      sobrenomeMedico: 'Silva',
      especialidadeMedico: 'Cardiologia',
      descricaoMedico: 'Médico cardiologista com 10 anos de experiência.',
      data_disponibilidade: '15/10/2025',
      hora_disponibilidade: '14:30',
    };

    const postResponse = await request(app)
      .post('/api/medico/registrar_medico')
      .send(medicoValido);

    expect(postResponse.statusCode).toEqual(201);
    expect(postResponse.body.crmMedico).toEqual(medicoValido.crmMedico);

    const crm = encodeURIComponent('123456-78/SP');

    const deleteResponse = await request(app)
      .delete(`/api/medico/deletar/${crm}`);

    expect(deleteResponse.statusCode).toEqual(200);
  });
  
});