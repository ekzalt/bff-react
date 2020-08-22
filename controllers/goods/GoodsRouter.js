const express = require('express');

const GoodsController = require('./GoodsController');
const GoodsMiddleware = require('./GoodsMiddleware');

class GoodsRouter {
  constructor({
    controller = new GoodsController(),
    middleware = new GoodsMiddleware(),
    router = express.Router(),
  }) {
    this.controller = controller;
    this.middleware = middleware;
    this.router = router;

    this.router
      .post('/', this.middleware.create, this.controller.create)
      .get('/', this.controller.findAll)
      .get('/:id', this.controller.findById)
      .put('/:id', this.middleware.replace, this.controller.replace)
      .patch('/:id', this.middleware.update, this.controller.update)
      .delete('/:id', this.controller.delete);
  }
}

module.exports = GoodsRouter;
