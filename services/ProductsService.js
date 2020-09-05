const { ProductsEntity } = require('../entities');
const { ProductsRepository } = require('../repositories');

class ProductsService {
  constructor(repository = new ProductsRepository()) {
    this.repository = repository;
  }

  findAll() {
    return this.repository.findAll();
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.repository.findById(id);
  }

  /**
   * @param {ProductsEntity} data
   */
  create(data) {
    return this.repository.create(data);
  }

  /**
   * @param {string} id
   * @param {ProductsEntity} data
   */
  replace(id, data) {
    return this.repository.replace(id, data);
  }

  /**
   * @param {string} id
   * @param {ProductsEntity} data
   */
  update(id, data) {
    return this.repository.update(id, data);
  }

  /**
   * @param {string} id
   */
  delete(id) {
    return this.repository.delete(id);
  }
}

module.exports = ProductsService;
