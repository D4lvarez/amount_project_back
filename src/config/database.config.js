const { Deta } = require('deta');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

// Instance Deta
const deta = Deta(process.env.DETA_KEY);

// Instance Databases
const incomesDb = deta.Base('incomesDb');
const egressesDb = deta.Base('egressesDb');

module.exports = {
  incomesDb,
  egressesDb,
};
