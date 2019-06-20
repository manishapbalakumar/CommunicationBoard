const router = require('express').Router();
module.exports = router;

router.use('/images', require('./images'));
router.use('/cards', require('./cards'));
router.use('/stacks', require('./stacks'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
