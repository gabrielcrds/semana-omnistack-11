const express = require('express');
const routes = require('./routes');
const cores = requite('./routes');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333);

/**
 * Metodos HTTP:
 * GET: buscar info
 * POST: criar info
 * PUT: alterar info
 * DELETE: deletar info
 */

/**
 * Tipos de parametros
 * 
 * Query params: parametros nomeados enviados na rota apos "?"
 * Route params: Parametros utilizados para identificar recursos
 * Request Body: utilizado para criar ou alterar recursos
 */

 /**
  * instalar nodemon pra n precisar reiniciar o server toda hora
  * npm install nodemon -D (-D avisa que é uma dependencia de desenvolvimento)
  * npm start
  */

/**
 * Query builder pra fazer queries; utilizar knex.js
 * exemplo: SELECT * FROM users => table('user').select('*').where()
 * npx knex init: cria aquivo de configuração do knex
 */


/**
 * Entidades:
 * 
 * ONG
 * Casos (incident)
 * 
 */

/**
 * funcionalidades
 * login de ong
 * logout de ong
 * cadastro de ong
 * cadastrar novos casos
 * deletar casos
 * listar casos especificos de uma ong
 * listar todos casos
 * entrar em contato com a ong (whats e email)
 */