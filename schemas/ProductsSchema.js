const Joi = require('joi');

const ProductPostSchema = Joi.object({
  id: Joi.string().allow(''),
  name: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required().min(1),
});

const ProductsPatchSchema = Joi.object({
  id: Joi.string().allow(''),
  name: Joi.string().allow(''),
  category: Joi.string().allow(''),
  description: Joi.string().allow(''),
  price: Joi.number().min(1),
});

module.exports = {
  ProductPostSchema,
  ProductsPatchSchema,
};
