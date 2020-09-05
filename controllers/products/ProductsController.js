const HttpStatus = require('http-status-codes');

const { ProductsService } = require('../../services');

class ProductsController {
  constructor(service = new ProductsService()) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.replace = this.replace.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  findAll(req, res, next) {
    console.log('ProductsController.findAll request');
    const data = { products: this.service.findAll() };

    console.log('ProductsController.findAll response', data);
    res.json(data);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  findById(req, res, next) {
    console.log('ProductsController.findById request', req.params.id);
    const data = this.service.findById(req.params.id);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('ProductsController.findById response', data);
    res.json(data);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  create(req, res, next) {
    console.log('ProductsController.create request', req.body);
    const data = this.service.create(req.body);

    console.log('ProductsController.create response', data);
    res.json(data);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  replace(req, res, next) {
    console.log('ProductsController.replace request', req.params.id, req.body);
    const data = this.service.replace(req.params.id, req.body);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('ProductsController.update response', data);
    res.json(data);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  update(req, res, next) {
    console.log('ProductsController.update request', req.params.id, req.body);
    const data = this.service.update(req.params.id, req.body);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('ProductsController.update response', data);
    res.json(data);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  delete(req, res, next) {
    console.log('ProductsController.delete request', req.params.id);
    const data = this.service.delete(req.params.id);

    if (!data) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
    }

    console.log('ProductsController.delete response', data);
    res.json(data);
  }
}

module.exports = ProductsController;
