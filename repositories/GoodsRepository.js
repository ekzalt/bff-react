const { GoodsEntity } = require('../entities');
const GoodsDatabase = require('./GoodsDatabase');

class GoodsRepository {
  constructor(db = GoodsDatabase) {
    this.db = db;
  }

  findAll() {
    return this.db;
  }

  findById(id) {
    return this.db.find(e => e.id === id) || null;
  }

  create(data) {
    const entity = GoodsEntity.create(data);
    this.db.push(entity);

    return entity;
  }

  replace(id, data) {
    const i = this.db.findIndex(e => e.id === id);

    if (i < 0) {
      return null;
    }

    const entity = new GoodsEntity({ ...data, id: this.db[i].id });
    this.db[i] = entity;

    return entity;
  }

  update(id, data) {
    const i = this.db.findIndex(e => e.id === id);

    if (i < 0) {
      return null;
    }

    const entity = new GoodsEntity({ ...this.db[i], ...data, id: this.db[i].id });
    this.db[i] = entity;

    return entity;
  }

  delete(id) {
    const i = this.db.findIndex(e => e.id === id);

    if (i < 0) {
      return null;
    }

    const entity = this.db[i];
    this.db.splice(i, 1);

    return entity;
  }
}

module.exports = GoodsRepository;
