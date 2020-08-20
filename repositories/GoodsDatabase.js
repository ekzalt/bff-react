const { GoodsEntity } = require('../entities');

/** @type {GoodsEntity[]} */
const goodsDb = [
  GoodsEntity.create({ title: 'Milk', weight: '1.5', description: 'For kids' }),
  GoodsEntity.create({ title: 'Meat', weight: '4', description: 'Friends meeting' }),
  GoodsEntity.create({ title: 'Eggs', weight: '0.5', description: 'Breakfast' }),
  GoodsEntity.create({ title: 'Butter', weight: '0.5', description: 'Sandwich' }),
  GoodsEntity.create({ title: 'Ham', weight: '1', description: 'Sandwich' }),
];

module.exports = goodsDb;
