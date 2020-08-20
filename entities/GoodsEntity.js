const { v4: uuidv4 } = require('uuid');

class GoodsEntity {
  constructor({
    id = '',
    title = '',
    weight = '',
    description = '',
    category = '',
  }) {
    this.id = id;
    this.title = title;
    this.weight = weight;
    this.description = description;
    this.category = category;
  }

  static create({ title, weight, description, category }) {
    return new GoodsEntity({
      id: uuidv4(),
      title,
      weight,
      description,
      category,
    });
  }
}

module.exports = GoodsEntity;
