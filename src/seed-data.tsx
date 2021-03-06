// this is just dummy/seed data for dev
// implementing the game play itself first,
// then i will remove this and create the setup screens and forms for players
// to populate the data

export const playersSeed: Array<Player> = [
  {
    name: 'jack',
    team: 0,
    turnOrder: 0,
    scores: [3],
  },
  {
    name: 'jill',
    team: 0,
    turnOrder: 3,
    scores: [7],
  },
  {
    name: 'thelma',
    team: 1,
    turnOrder: 1,
    scores: [13],
  },
  {
    name: 'louise',
    team: 1,
    turnOrder: 4,
    scores: [2],
  },
  {
    name: 'ben',
    team: 2,
    turnOrder: 2,
    scores: [4],
  },
  {
    name: 'jerry',
    team: 2,
    turnOrder: 5,
    scores: [1],
  },
];

export const wordsSeed: Array<string> = [
  'apple',
  'banana',
  'cranberry',
  'kiwi',
  'mango',
  'aardvark',
  'bear',
  'cat',
  'dog',
  'elephant',
  'chisel',
  'hammer',
  'saw',
  'screwdriver',
  'wrench',
  'earth',
  'fire',
  'heart',
  'water',
  'wind',
  'mars',
  'jupiter',
  'neptune',
  'saturn',
  'venus',
  'car',
  'helicopter',
  'motorcycle',
  'plane',
  'truck',
];
