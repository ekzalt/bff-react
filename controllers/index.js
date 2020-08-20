const homeRouter = require('./home');
const { GoodsMiddleware, GoodsController, GoodsRouter } = require('./goods');

module.exports = {
  homeRouter,
  GoodsMiddleware,
  GoodsController,
  GoodsRouter,
};
