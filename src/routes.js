const routes = require('express')()
const SensorController = require('./controllers/SensorController');

const sensorController = new SensorController();

routes.post('/',sensorController.save)
routes.get('/',sensorController.show)

module.exports = routes;