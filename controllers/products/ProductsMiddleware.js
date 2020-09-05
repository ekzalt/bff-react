const HttpStatus = require('http-status-codes');

const { ProductPostSchema, ProductsPatchSchema } = require('../../schemas');

class ProductsMiddleware {
  constructor() {
    this.create = this.create.bind(this);
    this.replace = this.replace.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  create(req, res, next) {
    console.log('ProductsMiddleware.create request', req.body);
    const { error } = ProductPostSchema.validate(req.body);

    if (error) {
      return next({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: error.details[0].message,
      });
    }

    return next();
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  replace(req, res, next) {
    console.log('ProductsMiddleware.replace request', req.params.id, req.body);
    const { error } = ProductPostSchema.validate(req.body);

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

  /**
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @returns {void}
   */
  update(req, res, next) {
    console.log('ProductsMiddleware.update request', req.params.id, req.body);
    const { error } = ProductsPatchSchema.validate(req.body);

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

module.exports = ProductsMiddleware;
