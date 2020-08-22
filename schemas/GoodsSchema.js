const Joi = require('joi');

const GoodsPostSchema = Joi.object({
  id: Joi.string().allow(''),
  title: Joi.string().required(),
  weight: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().allow(''),
});

const GoodsPatchSchema = Joi.object({
  id: Joi.string().allow(''),
  title: Joi.string().allow(''),
  weight: Joi.string().allow(''),
  description: Joi.string().allow(''),
  category: Joi.string().allow(''),
});

module.exports = {
  GoodsPostSchema,
  GoodsPatchSchema,
};
