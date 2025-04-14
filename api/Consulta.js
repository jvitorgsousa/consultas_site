const express = require('express');
const router = express.Router();
const Consulta = require('../models/Consulta');

// create
router.post('/agendar', async (req, res) => {
    try {
        const novaConsulta = new Consulta(req.body);
        await novaConsulta.save();
        res.status(201).json({ message: '[!] Consulta agendada com sucesso.' });
    } catch (error) {
        console.error('[X] ERRO AO AGENDAR CONSULTA', error.message)
        res.status(400).json({error: error.message})
    }
})

// read
router.get('/listar', async (req, res) => {
    try{
        const consultas = await Consulta.find();
        res.status(200).json(consultas);
    } catch (error) {
        res.status(500).json({ error: '[X] ERRO AO LISTAR CONSULTAS.', details: error.message });
    }
})

module.exports = router;