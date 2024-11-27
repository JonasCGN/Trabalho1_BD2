const orientjs = require('orientjs');
require('dotenv').config();

// Conectando ao OrientDB com o usuário 'root'
const server = orientjs({
  host: '192.168.1.15',
  port: 2424,
  username: 'root',
  password: 'root',
  useToken: true,
  logger: {
    info: console.log,
    debug: console.debug,
    warn: console.warn,
    error: console.error
  }
});

server.create({
  name: 'ola',
  type: 'graph',
  storage: 'plocal',
  username: 'root',
  password: 'root'
}).then(
  (create) => console.log('Created Database:', create.name)
).catch(
  (e) => console.log('Error ao criar db:', e)
);

// Use o banco de dados existente
const db = server.use({
  name: 'ola',
  username: 'root',
  password: 'root'
});

module.exports = db;
