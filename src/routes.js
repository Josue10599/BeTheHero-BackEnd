const express = require('express');

const OngController = require('./controllers/OngControllers');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionControllers');
const IncidentController = require('./controllers/IncidentControllers');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;