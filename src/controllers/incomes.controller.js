const { IncomesServices } = require('../services/incomes.services');

class IncomesController {
  constructor() {
    this.service = new IncomesServices();
  }

  async create(request, reply) {
    const body = request.body;

    const newIncome = {
      amount: body.amount,
      description: body.description,
      date: new Date().toLocaleString(),
    };

    try {
      const income = await this.service.put(newIncome);

      reply.code(201).send({
        data: income,
      });
    } catch (err) {
      reply.code(500).send({
        data: 'Somenthing failed while creating income',
      });
    }
  }

  async getByKey(request, reply) {
    const params = request.params;

    const key = params.key;

    const income = await this.service.get(key);

    reply.code(200).send({
      data: income,
    });
  }

  async getAll(request, reply) {
    const incomes = await this.service.fetch();

    reply.code(200).send({
      data: incomes,
    });
  }

  async update(request, reply) {
    const body = request.body;
    const params = request.params;

    const updateIncome = {
      amount: body.amount,
      description: body.description,
    };
    const key = params.key;

    try {
      await this.service.update(updateIncome, key);
      reply.code(201).send({
        data: 'Updated income',
      });
    } catch (err) {
      reply.code(500).send({
        data: 'Somenthing failed while updating income',
      });
    }
  }
}

module.exports = {
  IncomesController,
};
