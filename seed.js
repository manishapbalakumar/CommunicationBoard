'use strict';

const db = require('./server/db');
const { Image, Card, Stack } = require('./server/db/models/');

// eslint-disable-next-line max-statements
async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  const imageNames = [
    'Thumbs Up',
    'Thumbs Down',
    'Confused Woman',
    'Water',
    'Food',
  ];

  const imageURLs = [
    '/public/images/thumbsup.png',
    '/public/images/thumbsdown.png',
    '/public/images/confusedwoman.png',
    '/public/images/water.png',
    '/public/images/food.png',
  ];

  //product

  const thumbsUp = await Image.create({
    name: imageNames[0],
    imageURL: imageURLs[0],
  });

  const thumbsDown = await Image.create({
    name: imageNames[1],
    imageURL: imageURLs[1],
  });

  const confusedWoman = await Image.create({
    name: imageNames[2],
    imageURL: imageURLs[2],
  });

  const water = await Image.create({
    name: imageNames[3],
    imageURL: imageURLs[3],
  });

  const food = await Image.create({
    name: imageNames[4],
    imageURL: imageURLs[4],
  });

  const yesNo = await Card.create({
    name: 'Yes-No-Confused',
  });

  await yesNo.addImages([thumbsUp, thumbsDown, confusedWoman]);

  const waterCard = await Card.create({
    name: 'Water',
  });

  await waterCard.addImage(water);

  const foodWater = await Card.create({
    name: 'Food and Water',
  });

  await foodWater.addImages([food, water]);

  const yesNoStack = await Stack.create({
    name: 'Yes-No Stack',
  });

  await yesNoStack.addCard(yesNo);

  const foodWaterStack = await Stack.create({
    name: 'Food-Water Stack',
  });

  await foodWaterStack.addCards([foodWater, waterCard]);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
