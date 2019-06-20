const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
});

module.exports = Image;
