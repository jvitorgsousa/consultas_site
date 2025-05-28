const express = require('express');
const router = express.Router();
const Medico = require('../models/Medico');

/**
 * @swagger
 * /medico/registrar_medico:
 *   post:
 *     summary: Registra um novo médico
 *     tags: [Medico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeMedico:
 *                 type: string
 *               crmMedico:
 *                 type: string
 *               especialidade:
 *                 type: string
 *               data_disponibilidade:
 *                 type: string
 *                 pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$"
 *               hora_disponibilidade:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):([0-5]\\d)$"
 *     responses:
 *       201:
 *         description: Médico registrado com sucesso
 *       400:
 *         description: Erro ao registrar médico
 */
router.post('/registrar_medico', async (req, res) => {
    try {
        const novoMedico = new Medico(req.body);
        await novoMedico.save();
        res.status(201).json(novoMedico);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
});

/**
 * @swagger
 * /medico/listar_medicos:
 *   get:
 *     summary: Lista todos os médicos cadastrados
 *     tags: [Medico]
 *     responses:
 *       200:
 *         description: Lista de médicos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/models/Medico'
 *       500:
 *         description: Erro ao buscar médicos
 */

router.get('/listar_medicos', async (req, res) => {
    try {
      const medicos = await Medico.find();
      res.status(200).json(medicos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar médicos', details: error.message });
    }
  });

/**
 * @swagger
 * /medico/deletar/{crm}:
 *   delete:
 *     summary: Deleta um médico pelo CRM
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: crm
 *         schema:
 *           type: string
 *         required: true
 *         description: CRM do médico
 *     responses:
 *       200:
 *         description: Médico deletado com sucesso
 *       404:
 *         description: Médico não encontrado
 *       500:
 *         description: Erro ao deletar médico
 */
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