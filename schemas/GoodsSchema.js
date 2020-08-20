const Joi = require('joi');

const GoodsSchema = Joi.object({
  id: Joi.string().allow(''),
  title: Joi.string().min(1).required(),
  weight: Joi.string().min(1).required(),
  description: Joi.string().min(1).required(),
  category: Joi.string().allow(''),
});

module.exports = GoodsSchema;
