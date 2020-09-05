const { ProductsEntity } = require('../entities');

/** @type {ProductsEntity[]} */
const ProductsDatabase = [
  ProductsEntity.create({ name: 'CocaCola', category: 'Drinks', description: '2 liters', price: 50 }),
  ProductsEntity.create({ name: 'Tomatoes', category: 'Vegetables', description: 'Cherry', price: 40 }),
  ProductsEntity.create({ name: 'Beef', category: 'Meat & Milk', description: '1 kilogram for barbecue', price: 140 }),
];

module.exports = ProductsDatabase;
