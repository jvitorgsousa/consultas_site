const express = require('express');
const router = express.Router();
const Medico = require('../models/Medico');

router.post('/registrar_medico', async (req, res) => {
    try {
        const novoMedico = new Medico(req.body);
        await novoMedico.save();
        res.status(201).json(novoMedico);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
});

router.get('/listar_medicos', async (req, res) => {
    try {
      const medicos = await Medico.find();
      res.status(200).json(medicos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar médicos', details: error.message });
    }
  });
  
router.delete('/deletar/:crm', async (req, res) => {
    try {
      const medicoDeletado = await Medico.findOneAndDelete({ crmMedico: req.params.crm });
  
      if (!medicoDeletado) {
        return res.status(404).json({ error: 'Médico não encontrado' });
      }
  
      res.status(200).json({ message: 'Médico deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar médico', details: error.message });
    }
});

module.exports = router;