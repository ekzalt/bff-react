const express = require('express');

const { GoodsDatabase, GoodsRepository } = require('./repositories');
const { GoodsService } = require('./services');
const { GoodsMiddleware, GoodsController, GoodsRouter } = require('./controllers');

const init = () => {
  console.log('IoC container init');

  const goodsRepository = new GoodsRepository(GoodsDatabase);
  const goodsService = new GoodsService(goodsRepository);
  const goodsMiddleware = new GoodsMiddleware();
  const goodsController = new GoodsController(goodsService);
  const goodsRouter = new GoodsRouter({
    controller: goodsController,
    middleware: goodsMiddleware,
    router: express.Router(),
  }).router;

  return Object.freeze({
    goodsRepository,
    goodsService,
    goodsMiddleware,
    goodsController,
    goodsRouter,
  });
};

module.exports = init;
