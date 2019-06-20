const router = require('express').Router();
const { Card, Image } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const cards = await Card.findAll({ include: Image });
    res.json(cards);
  } catch (err) {
    next(err);
  }
});
