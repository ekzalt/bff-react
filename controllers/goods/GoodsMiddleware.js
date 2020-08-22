const HttpStatus = require('http-status-codes');

const { GoodsPostSchema, GoodsPatchSchema } = require('../../schemas');

class GoodsMiddleware {
  constructor() {
    this.create = this.create.bind(this);
    this.replace = this.replace.bind(this);
    this.update = this.update.bind(this);
  }

  create(req, res, next) {
    console.log('GoodsMiddleware.create request', req.body);
    const { error } = GoodsPostSchema.validate(req.body);

    if (error) {
      return next({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: error.details[0].message,
      });
    }

    return next();
  }

  replace(req, res, next) {
    console.log('GoodsMiddleware.replace request', req.params.id, req.body);
    const { error } = GoodsPostSchema.validate(req.body);

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

    return next();
  }

  update(req, res, next) {
    console.log('GoodsMiddleware.update request', req.params.id, req.body);
    const { error } = GoodsPatchSchema.validate(req.body);

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

    return next();
  }
}

module.exports = GoodsMiddleware;
