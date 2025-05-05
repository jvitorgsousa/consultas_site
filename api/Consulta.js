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

// read por id
router.get('/listar/:id', async (req, res) => {
    try {
        const consulta = await Consulta.findById(req.params.id);
        if (!consulta) {
            return res.status(404).json({ error: '[X] CONSULTA NÃO ENCONTRADA.' });
        }
        res.status(200).json(consulta);
    } catch (error) {
        res.status(500).json({ error: '[X] ERRO AO OBTER CONSULTA.', details: error.message });
    }
});

// update
router.put('/alterar_consulta/:id', async (req, res) => {
    try {
        const consultaAtualizada = await Consulta.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!consultaAtualizada) {
            return res.status(404).json({ error: '[X] CONSULTA NÃO ENCONTRADA.' });
        }
        
        res.status(200).json({ 
            message: '[!] Consulta atualizada com sucesso.', 
            consulta: consultaAtualizada 
        });
    } catch (error) {
        console.error('[X] ERRO AO ATUALIZAR CONSULTA', error.message);
        res.status(400).json({ error: error.message });
    }
});

// delete
router.delete('/desmarcar/:id', async (req, res) => {
    try {
        const consultaRemovida = await Consulta.findByIdAndDelete(req.params.id);
        
        if (!consultaRemovida) {
            return res.status(404).json({ error: '[X] CONSULTA NÃO ENCONTRADA.' });
        }
        
        res.status(200).json({ message: '[!] Consulta removida com sucesso.' });
    } catch (error) {
        console.error('[X] ERRO AO REMOVER CONSULTA', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;