const { EgressesController } = require('../controllers/egresses.controller');

const controller = new EgressesController();

const egressesRouter = async (fastify, options) => {
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

  fastify.delete('/:key', async (request, reply) => {
    await controller.deleteEgress(request, reply);
  });
};

module.exports = egressesRouter;
