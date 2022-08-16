const express = require('express');
const KnightService = require('../services/caballeros.service');
// const validatorHandler = require("../middlewares/validator.handler");
// const { createSaintSchema, updateSaintSchema, getSaintSchema } = "../schemas/saint.schema";



const router = express.Router();
const service = new KnightService();

router.get('/', async (req, res, next) => {
  try {
    const saints = await service.find();
    res.status(200).json(saints);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const saint = await service.findOne(id);
      res.json(saint);
    } catch (error) {
      next(error);
    }

  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const saintCreated = await service.create(body);
      res.status(201).json(saintCreated);
    } catch (error) {
      next(error);
    }
  });


router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateSaint = await service.update(id, body);

    res.json(updateSaint)

  } catch (error) {
    next(error);
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const erraseSaint = await service.delete(id);
    res.json(erraseSaint);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
