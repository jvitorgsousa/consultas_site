const express = require('express');
const Paciente = require('../models/Paciente');
const router = express.Router();
const bcrypt = require('bcryptjs');

// cadastro
// http://localhost:3000/api/pacientes/cadastro
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
      res.status(201).json({ message: '[!] PACIENTE CADASTRADO COM SUCESSO' });
    } catch (error) {
      console.error('[X] ERRO AO CADASTRAR PACIENTE', error.message);
      res.status(400).json({ error: error.message });
    }
});

// login
router.post('/signin', (req, res) => {
    
})

// deletar
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