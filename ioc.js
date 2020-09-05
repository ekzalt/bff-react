const express = require('express');

const {
  GoodsDatabase,
  GoodsRepository,
  ProductsDatabase,
  ProductsRepository,
} = require('./repositories');
const { GoodsService, ProductsService } = require('./services');
const {
  GoodsMiddleware,
  GoodsController,
  GoodsRouter,
  ProductsMiddleware,
  ProductsController,
  ProductsRouter,
} = require('./controllers');

const init = () => {
  console.log('IoC container init');
  // Repository
  const goodsRepository = new GoodsRepository(GoodsDatabase);
  const productsRepository = new ProductsRepository(ProductsDatabase);
  // Service
  const goodsService = new GoodsService(goodsRepository);
  const productsService = new ProductsService(productsRepository);
  // Middleware
  const goodsMiddleware = new GoodsMiddleware();
  const productsMiddleware = new ProductsMiddleware();
  // Controller
  const goodsController = new GoodsController(goodsService);
  const productsController = new ProductsController(productsService);
  // Router
  const goodsRouter = new GoodsRouter({
    controller: goodsController,
    middleware: goodsMiddleware,
    router: express.Router(),
  }).router;
  const productsRouter = new ProductsRouter({
    controller: productsController,
    middleware: productsMiddleware,
    router: express.Router(),
  }).router;

  return Object.freeze({
    // goods
    goodsRepository,
    goodsService,
    goodsMiddleware,
    goodsController,
    goodsRouter,
    // products
    productsRepository,
    productsService,
    productsMiddleware,
    productsController,
    productsRouter,
  });
};

module.exports = init;
