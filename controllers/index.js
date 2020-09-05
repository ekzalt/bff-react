const homeRouter = require('./home');
const { GoodsMiddleware, GoodsController, GoodsRouter } = require('./goods');
const { ProductsMiddleware, ProductsController, ProductsRouter } = require('./products');

module.exports = {
  homeRouter,

  GoodsMiddleware,
  GoodsController,
  GoodsRouter,

  ProductsMiddleware,
  ProductsController,
  ProductsRouter,
};
