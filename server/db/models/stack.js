const Sequelize = require('sequelize');
const db = require('../db');

const Stack = db.define('stack', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Stack;
