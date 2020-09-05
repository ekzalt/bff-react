const { ProductsEntity } = require('../entities');
const ProductsDatabase = require('./ProductsDatabase');

class ProductsRepository {
  constructor(db = ProductsDatabase) {
    this.db = db;
  }

  findAll() {
    return this.db;
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.db.find(e => e.id === id) || null;
  }

  /**
   * @param {ProductsEntity} data
   */
  create(data) {
    const entity = ProductsEntity.create(data);
    this.db.push(entity);

    return entity;
  }

  /**
   * @param {string} id
   * @param {ProductsEntity} data
   */
  replace(id, data) {
    const i = this.db.findIndex(e => e.id === id);

    if (i < 0) {
      return null;
    }

    const entity = new ProductsEntity({ ...data, id: this.db[i].id });
    this.db[i] = entity;

    return entity;
  }

  /**
   * @param {string} id
   * @param {ProductsEntity} data
   */
  update(id, data) {
    const i = this.db.findIndex(e => e.id === id);

    if (i < 0) {
      return null;
    }

    const entity = new ProductsEntity({ ...this.db[i], ...data, id: this.db[i].id });
    this.db[i] = entity;

    return entity;
  }

  /**
   * @param {string} id
   */
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

module.exports = ProductsRepository;
