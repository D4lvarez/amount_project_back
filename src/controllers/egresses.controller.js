const { EgressesServices } = require('../services/egresses.services');

class EgressesController {
  constructor() {
    this.service = new EgressesServices();
  }

  async create(request, reply) {
    const body = request.body;

    const newEgress = {
      amount: body.amount,
      description: body.description,
      date: new Date().toLocaleString(),
    };

    try {
      const egress = await this.service.put(newEgress);

      reply.code(201).send({
        data: egress,
      });
    } catch (err) {
      reply.code(500).send({
        data: 'Somenthing failed while creating egress',
      });
    }
  }

  async getByKey(request, reply) {
    const params = request.params;

    const key = params.key;

    const egress = await this.service.get(key);

    reply.code(200).send({
      data: egress,
    });
  }

  async getAll(request, reply) {
    const egresses = await this.service.fetch();

    reply.code(200).send({
      data: egresses,
    });
  }

  async update(request, reply) {
    const body = request.body;
    const params = request.params;

    const updateEgress = {
      amount: body.amount,
      description: body.description,
    };
    const key = params.key;

    try {
      await this.service.update(updateEgress, key);
      reply.code(201).send({
        data: 'Updated egress',
      });
    } catch (err) {
      reply.code(500).send({
        data: 'Somenthing failed while updating egress',
      });
    }
  }

  async deleteEgress(key) {
    await this.service.delete(key);
  }
}

module.exports = {
  EgressesController,
};
