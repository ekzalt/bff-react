const HttpStatus = require('http-status-codes');

const { GoodsSchema } = require('../../schemas');

class GoodsMiddleware {
  constructor() {
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  create(req, res, next) {
    console.log('GoodsMiddleware.create request', req.body);
    const { error } = GoodsSchema.validate(req.body);

    if (error) {
      return next({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: error.details[0].message,
      });
    }

    next();
  }

  update(req, res, next) {
    console.log('GoodsMiddleware.update request', req.params.id, req.body);
    const { error } = GoodsSchema.validate(req.body);

    if (error) {
      return next({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: error.details[0].message,
      });
    }
    if (req.body.id && req.body.id !== req.params.id) {
      return next({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: 'id does not match',
      });
    }

    next();
  }
}

module.exports = GoodsMiddleware;
