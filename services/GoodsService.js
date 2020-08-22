const { GoodsRepository } = require('../repositories');

class GoodsService {
  constructor(repository = new GoodsRepository()) {
    this.repository = repository;
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id) {
    return this.repository.findById(id);
  }

  create(data) {
    return this.repository.create(data);
  }

  replace(id, data) {
    return this.repository.replace(id, data);
  }

  update(id, data) {
    return this.repository.update(id, data);
  }

  delete(id) {
    return this.repository.delete(id);
  }
}

module.exports = GoodsService;
