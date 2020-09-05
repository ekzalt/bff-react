const { v4: uuidv4 } = require('uuid');

class ProductsEntity {
  constructor({
    id = '',
    name = '',
    category = '',
    description = '',
    price = 0,
  }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
  }

  /**
   * @param {ProductsEntity} params
   */
  static create({
    name,
    category,
    description,
    price,
  }) {
    return new ProductsEntity({
      id: uuidv4(),
      name,
      category,
      description,
      price,
    });
  }
}

module.exports = ProductsEntity;
