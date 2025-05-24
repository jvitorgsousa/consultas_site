const express = require('express');
const router = express.Router();
const Consulta = require('../models/Consulta');

/**
 * @swagger
 * /consulta/agendar:
 *   post:
 *     summary: Agenda uma nova consulta médica
 *     tags: [Consulta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 *     responses:
 *       201:
 *         description: Consulta agendada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "[!] Consulta agendada com sucesso."
 *       400:
 *         description: Erro ao agendar consulta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mensagem de erro detalhada"
 */
router.post('/agendar', async (req, res) => {
    try {
        const novaConsulta = new Consulta(req.body);
        await novaConsulta.save();
        res.status(201).json({ message: '[!] Consulta agendada com sucesso.' });
    } catch (error) {
        console.error('[X] ERRO AO AGENDAR CONSULTA', error.message)
        res.status(400).json({error: error.message})
    }
});

/**
 * @swagger
 * /consulta/listar:
 *   get:
 *     summary: Lista todas as consultas agendadas
 *     tags: [Consulta]
 *     responses:
 *       200:
 *         description: Lista de consultas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Consulta'
 *       500:
 *         description: Erro ao listar consultas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "[X] ERRO AO LISTAR CONSULTAS."
 *                 details:
 *                   type: string
 *                   example: "Mensagem de erro detalhada"
 */
router.get('/listar', async (req, res) => {
    try{
        const consultas = await Consulta.find();
        res.status(200).json(consultas);
    } catch (error) {
        res.status(500).json({ error: '[X] ERRO AO LISTAR CONSULTAS.', details: error.message });
    }
});

/**
 * @swagger
 * /consulta/listar/{id}:
 *   get:
 *     summary: Obtém uma consulta específica por ID
 *     tags: [Consulta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da consulta
 *     responses:
 *       200:
 *         description: Consulta encontrada e retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consulta'
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "[X] CONSULTA NÃO ENCONTRADA."
 *       500:
 *         description: Erro ao obter consulta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "[X] ERRO AO OBTER CONSULTA."
 *                 details:
 *                   type: string
 *                   example: "Mensagem de erro detalhada"
 */
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

/**
 * @swagger
 * /consulta/alterar_consulta/{id}:
 *   put:
 *     summary: Atualiza uma consulta existente
 *     tags: [Consulta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da consulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "[!] Consulta atualizada com sucesso."
 *                 consulta:
 *                   $ref: '#/components/schemas/Consulta'
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "[X] CONSULTA NÃO ENCONTRADA."
 *       400:
 *         description: Erro ao atualizar consulta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mensagem de erro detalhada"
 */
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

/**
 * @swagger
 * /consulta/desmarcar/{id}:
 *   delete:
 *     summary: Remove uma consulta agendada
 *     tags: [Consulta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da consulta
 *     responses:
 *       200:
 *         description: Consulta removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "[!] Consulta removida com sucesso."
 *       404:
 *         description: Consulta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "[X] CONSULTA NÃO ENCONTRADA."
 *       500:
 *         description: Erro ao remover consulta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mensagem de erro detalhada"
 */
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Consulta:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único da consulta (gerado automaticamente)
 *         paciente:
 *           type: string
 *           description: Nome do paciente
 *           example: "João da Silva"
 *         medico:
 *           type: string
 *           description: Nome do médico
 *           example: "Dra. Ana Souza"
 *         especialidade:
 *           type: string
 *           description: Especialidade médica
 *           example: "Cardiologia"
 *         data:
 *           type: string
 *           format: date-time
 *           description: Data e hora da consulta
 *           example: "2023-12-15T14:30:00Z"
 *         observacoes:
 *           type: string
 *           description: Observações adicionais sobre a consulta
 *           example: "Paciente com histórico de hipertensão"
 *       required:
 *         - paciente
 *         - medico
 *         - especialidade
 *         - data
 */

module.exports = router;