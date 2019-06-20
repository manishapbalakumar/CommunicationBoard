const Image = require('./image');
const Card = require('./card');
const Stack = require('./stack');

Image.belongsTo(Card);
Card.hasMany(Image);

Card.belongsToMany(Stack, { through: 'cards_in_stacks' });
Stack.belongsToMany(Card, { through: 'cards_in_stacks' });

module.exports = {
  Image,
  Card,
  Stack,
};
