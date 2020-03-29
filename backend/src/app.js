const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());
//convertendo o JSON
app.use(express.json());
app.use(routes);
app.use(errors());

/*
* criando rotas e recursos
*/
/*
* Metodos HTTP
*
* GET : Buscar/Listar informação do back-end
* POST : Criar informação no back-end
* PUT : Alterar uma informação no back-end
* DELETE : Deletar uma informação no back-end
*/
/*
* Tipos de parâmetros
* 
* Query Parans: Parâmetros nomeados eniados na rota apos "?" (Filtros, Paginação)
* Route Parans : Parâmetros utilizados para indentificar recursos
* Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL : MySql, SQLite, PostegreSQL, Oracle, Microsoft SQL
* NoSQL: MongoDB, CouchDB, ETC
*/

/*
* Drivers : SELECT = FROM users
* Query Builder: table('users').select('*').where()
*/

// porta que vai abrir o localhost
module.exports = app;