const router = require('express').Router();
const { Image, Card, Stack } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const stacks = await Stack.findAll({
      include: [{ model: Card, include: Image }],
    });
    res.json(stacks);
  } catch (err) {
    next(err);
  }
});
