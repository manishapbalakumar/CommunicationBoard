const Sequelize = require('sequelize');
const db = require('../db');

const Card = db.define('card', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Card;
