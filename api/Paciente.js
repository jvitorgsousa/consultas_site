const express = require('express');
const Paciente = require('../models/Paciente');
const router = express.Router();
const bcrypt = require('bcryptjs');

// http://localhost:3000/api/pacientes/operacao 

// create
router.post('/cadastro', async (req, res) => {
    try {
      const { cpfPaciente, nomePaciente, dataNascimento, emailPaciente, senhaPaciente, telefonePaciente, enderecoPaciente, generoPaciente } = req.body;
  
      const senhaCrypt = await bcrypt.hash(senhaPaciente, 10);

      const novoPaciente = new Paciente({
        cpfPaciente,
        nomePaciente,
        dataNascimento,
        emailPaciente,
        senhaPaciente: senhaCrypt,
        telefonePaciente,
        enderecoPaciente,
        generoPaciente
      });
  
      await novoPaciente.save();
      res.status(201).json({ message: '[!] Paciente cadastrado com sucesso.' });
    } catch (error) {
      console.error('[X] ERRO AO CADASTRAR PACIENTE', error.message);
      res.status(400).json({ error: error.message });
    }
});

// login
router.post('/login', async (req, res) => {
  const { emailPaciente, senhaPaciente } = req.body;

  try {
    const paciente = await Paciente.findOne({ emailPaciente });

    if (!paciente) {
      return res.status(404).json({ error: '[?] PACIENTE NÃO ENCONTRADO.' });
    }

    const senhaCorreta = await bcrypt.compare(senhaPaciente, paciente.senhaPaciente);

    if (!senhaCorreta) {
      return res.status(401).json({ error: '[!] Senha inválida.' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso', paciente });
  } catch (error) {
    res.status(500).json({ error: '[X] ERRO NO LOGIN ' + error.message });
  }
});

// read e read por id
router.get('/get', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: '[X] ERRO AO BUSCAR PACIENTE' }, error.message);
  }
});

router.get('/get/:cpfPaciente', async (req, res) => {
  try {
    const cpf = req.params.cpfPaciente;
    const paciente = await Paciente.findOne({ cpfPaciente: cpf });
    if (!paciente) return res.status(404).json({ error: '[X] ERRO AO BUSCAR PACIENTE' }, error.message);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(400).json({ error: '[X] ID DE PACIENTE INVÁLIDO' });
  }
});


// replace
router.put('/atualizar/:cpfPaciente', async (req, res) => {
  try {
    const cpf = req.params.cpfPaciente;
    const updateData = req.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'O corpo da requisição não pode estar vazio' });
    }

    if (updateData.senhaPaciente) {
      const senhaCrypt = await bcrypt.hash(updateData.senhaPaciente, 10);
      updateData.senhaPaciente = senhaCrypt;
    }

    const pacienteAtualizado = await Paciente.findOneAndUpdate(
      { cpfPaciente: cpf },
      updateData,
      { 
        new: true,
        runValidators: true 
      }
    );

    if (!pacienteAtualizado) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    res.status(200).json(pacienteAtualizado);
  } catch (error) {
    res.status(400).json({ 
      error: 'Erro ao atualizar paciente',
      details: error.message 
    });
  }
});

// delete
router.delete('/delete/:cpfPaciente', async (req, res) => {
    try {
        const cpf = req.params.cpfPaciente;
        const pacienteDeletado = await Paciente.findOneAndDelete({ cpfPaciente: cpf });

        if (!pacienteDeletado) {
            return res.status(404).json({ message: '[?] PACIENTE NÃO ENCONTRADO' });
        }

        res.status(200).json({ message: '[!] PACIENTE DELETADO COM SUCESSO' });
    } catch (error) {
        console.error('[X] ERRO AO DELETAR PACIENTE', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 