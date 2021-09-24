exports.up = function(knex) {
    return knex.schema.createTable('sensor_00', table => {
        table.increments('id').primary()
        table.string('sensorId').notNull()
        table.string('content').notNull()
        table.timestamp('createdAt').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sensor_00')
};
