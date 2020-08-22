const HttpStatus = require('http-status-codes');

const { GoodsService } = require('../../services');

class GoodsController {
  constructor(service = new GoodsService()) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.replace = this.replace.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  findAll(req, res, next) {
    console.log('GoodsController.findAll request');
    const data = { goods: this.service.findAll() };

    console.log('GoodsController.findAll response', data);
    res.json(data);
  }

  findById(req, res, next) {
    console.log('GoodsController.findById request', req.params.id);
    const data = this.service.findById(req.params.id);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('GoodsController.findById response', data);
    res.json(data);
  }

  create(req, res, next) {
    console.log('GoodsController.create request', req.body);
    const data = this.service.create(req.body);

    console.log('GoodsController.create response', data);
    res.json(data);
  }

  replace(req, res, next) {
    console.log('GoodsController.replace request', req.params.id, req.body);
    const data = this.service.replace(req.params.id, req.body);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('GoodsController.update response', data);
    res.json(data);
  }

  update(req, res, next) {
    console.log('GoodsController.update request', req.params.id, req.body);
    const data = this.service.update(req.params.id, req.body);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('GoodsController.update response', data);
    res.json(data);
  }

  delete(req, res, next) {
    console.log('GoodsController.delete request', req.params.id);
    const data = this.service.delete(req.params.id);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('GoodsController.delete response', data);
    res.json(data);
  }
}

module.exports = GoodsController;
