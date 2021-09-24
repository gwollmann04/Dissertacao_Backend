const knex = require('../database/connection')

class SensorController {
    save = async (req, res) => {
        const measureData = { ...req.body }

        await knex('sensor_00').insert(measureData);

        return res.json(measureData);
    }

    show = async (req, res) => {
        const measureData = await knex('sensor_00')
            .select('sensor_00.*')

        return res.json( measureData );
    }
}

module.exports = SensorController;