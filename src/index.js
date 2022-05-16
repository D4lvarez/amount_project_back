const fastify = require('fastify')({ logger: true });

// Routes
fastify.register(require('./routes/incomes.router'));

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
