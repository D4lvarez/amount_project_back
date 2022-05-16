const fastify = require('fastify')({ logger: true });

// Cors Config
fastify.register(require('@fastify/cors'), {
  origin: ['*'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
});

// Routes
fastify.register(require('./routes/incomes.router'), { prefix: '/v1/incomes' });
fastify.register(require('./routes/egresses.router'), {
  prefix: '/v1/egresses',
});

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
