const { egressesDb } = require('../config/database.config');

class EgressesServices {
  constructor() {
    this.db = egressesDb;
  }

  async put(data) {
    try {
      const egress = await this.db.put(data);
      return egress;
    } catch (err) {
      return err;
    }
  }

  async get(key) {
    const egress = await this.db.get(key);
    return egress;
  }

  async fetch() {
    const egresses = await this.db.fetch();
    return egresses.items;
  }

  async update(data, key) {
    try {
      const updateEgress = await this.db.update(data, key);
      return updateEgress;
    } catch (err) {
      return err;
    }
  }

  async delete(key) {
    await this.db.delete(key);
  }
}

module.exports = {
  EgressesServices,
};
