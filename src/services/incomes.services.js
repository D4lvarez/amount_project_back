const { incomesDb } = require('../config/database.config');

class IncomesServices {
  constructor() {
    this.db = incomesDb;
  }

  async put(data) {
    try {
      const income = await this.db.put(data);
      return income;
    } catch (err) {
      return err;
    }
  }

  async get(key) {
    const income = await this.db.get(key);
    return income;
  }

  async fetch() {
    const incomes = await this.db.fetch();
    return incomes.items;
  }

  async update(data, key) {
    try {
      const updateIncome = await this.db.update(data, key);
      return updateIncome;
    } catch (err) {
      return err;
    }
  }
}

module.exports = {
  IncomesServices,
};
