const router = require('express').Router();
const { Image } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (err) {
    next(err);
  }
});
