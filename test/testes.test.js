const request = require('supertest');
const app = require('../server.js').app;
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Paciente = require('../models/Paciente.js');

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

describe('Testes no GET', () => {
  test('ID Inexistente', async () => {
    const res = await request(app).get('/api/paciente/get/12345');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: '[X] ID DE PACIENTE INVÁLIDO' });
  });
  test('Nenhum paciente registrado', async () => {
    const res = await request(app).get('/api/paciente/get');
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBe({ error: '[X] ERRO AO BUSCAR PACIENTE' });
    console.log(res.body);
  });
  test('Paciente encontrado', async () => {
    const pacienteValido = {
      cpfPaciente: '123.456.789-01',
      nomePaciente: 'Teste da Silva',
      dataNascimento: '19/03/2004',
      emailPaciente: 'teste.silva@example.com',
      senhaPaciente: 'senha123',
      telefonePaciente: '11987654321',
      enderecoPaciente: {
        cep: "58700-015",
        logradouro: "casa",
        numero: "001",
        complemento: "Esquina",
        bairro: "Centro",
        cidade: "Patos",
        estado: "PB"
      },
      generoPaciente: 'Masculino'
    };
    await request(app)
      .post('/api/paciente/cadastro')
      .send(pacienteValido);

    const res = await request(app).get('/api/paciente/get');
    expect(res.statusCode).toEqual(200);
  });
  
});

describe('Testes no Cadastro', () => {
  const pacienteValido = {
    cpfPaciente: '123.456.789-01',
    nomePaciente: 'Teste da Silva',
    dataNascimento: '19/03/2004',
    emailPaciente: 'teste.silva@example.com',
    senhaPaciente: 'senha123',
    telefonePaciente: '11987654321',
    enderecoPaciente: {
      cep: "58700-015",
      logradouro: "casa",
      numero: "001",
      complemento: "Esquina",
      bairro: "Centro",
      cidade: "Patos",
      estado: "PB"
    },
    generoPaciente: 'Masculino'
  };

  test('Cadastro com Sucesso', async () => {
    const res = await request(app)
      .post('/api/paciente/cadastro')
      .send(pacienteValido);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({ message: '[!] Paciente cadastrado com sucesso.' });
  });

  test('CPF Duplicado', async () => {
    await request(app).post('/api/paciente/cadastro').send(pacienteValido);
    const res = await request(app).post('/api/paciente/cadastro').send(pacienteValido);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  test('Falta de argumentos', async () => {
    const pacienteInvalido = {
      cpfPaciente: '123.456.789-01',
      dataNascimento: '19/03/2004',
      emailPaciente: 'teste.silva@example.com',
      senhaPaciente: 'senha123',
      telefonePaciente: '11987654321',
      enderecoPaciente: {
        cep: "58700-015",
        logradouro: "casa",
        numero: "001",
        complemento: "Esquina",
        bairro: "Centro",
        cidade: "Patos",
        estado: "PB"
      },
      generoPaciente: 'Masculino'
    };

    const res = await request(app).post('/api/paciente/cadastro').send(pacienteInvalido);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});

describe('Testes no Login', () => {
  test('Paciente não encontrado', async () => {
    const res = await request(app).post('/api/paciente/login').send({emailPaciente: 'emailfalso@email.com', senhaPaciente: 'senha123'});
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: '[?] PACIENTE NÃO ENCONTRADO.' });
  });
  test('Senha invalida', async () => {
    const pacienteValido = {
      cpfPaciente: '123.456.789-01',
      nomePaciente: 'Teste da Silva',
      dataNascimento: '19/03/2004',
      emailPaciente: 'teste.silva@example.com',
      senhaPaciente: 'senha123',
      telefonePaciente: '11987654321',
      enderecoPaciente: {
        cep: "58700-015",
        logradouro: "casa",
        numero: "001",
        complemento: "Esquina",
        bairro: "Centro",
        cidade: "Patos",
        estado: "PB"
      },
      generoPaciente: 'Masculino'
    };
    await request(app)
      .post('/api/paciente/cadastro')
      .send(pacienteValido);

    const res = await request(app).post('/api/paciente/login').send({emailPaciente: 'teste.silva@example.com', senhaPaciente: 'senha12443'});
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({ error: '[!] Senha inválida.' });
  });

  test('Login válido', async () => {
    const pacienteValido = {
      cpfPaciente: '123.456.789-01',
      nomePaciente: 'Teste da Silva',
      dataNascimento: '19/03/2004',
      emailPaciente: 'teste.silva@example.com',
      senhaPaciente: 'senha123',
      telefonePaciente: '11987654321',
      enderecoPaciente: {
        cep: "58700-015",
        logradouro: "casa",
        numero: "001",
        complemento: "Esquina",
        bairro: "Centro",
        cidade: "Patos",
        estado: "PB"
      },
      generoPaciente: 'Masculino'
    };
    await request(app)
      .post('/api/paciente/cadastro')
      .send(pacienteValido);

    const res = await request(app).post('/api/paciente/login').send({emailPaciente: 'teste.silva@example.com', senhaPaciente: 'senha123'});
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Login realizado com sucesso');
  });
});