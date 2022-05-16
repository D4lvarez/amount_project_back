const { IncomesController } = require('../controllers/incomes.controller');

const controller = new IncomesController();

const incomesRoutes = async (fastify, options) => {
  fastify.get('/', async (request, reply) => {
    await controller.getAll(request, reply);
  });

  fastify.get('/:key', async (request, reply) => {
    await controller.getByKey(request, reply);
  });

  fastify.post('/', async (request, reply) => {
    await controller.create(request, reply);
  });

  fastify.put('/:key', async (request, reply) => {
    await controller.update(request, reply);
  });
};

module.exports = incomesRoutes;
