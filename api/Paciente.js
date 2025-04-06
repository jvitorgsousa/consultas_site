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

router.get('/get/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) return res.status(404).json({ error: '[X] ERRO AO BUSCAR PACIENTE' }, error.message);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(400).json({ error: '[X] ID DE PACIENTE INVÁLIDO' });
  }
});


// replace
router.put('/atualizar/:id', async (req, res) => {
  try {
    const pacienteAtualizado = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pacienteAtualizado) return res.status(404).json({ error: '[X] ERRO AO ATUALIZAR PACIENTE' }, error.message);
    res.status(200).json(pacienteAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pacienteDeletado = await Paciente.findByIdAndDelete(id);

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