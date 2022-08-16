const Joi = require('joi');

const id = Joi.string(),
  name = Joi.string().min(2).max(12),
  age = Joi.number().integer().min(0),
  height = Joi.number().integer().min(0),
  constelation = Joi.string().min(3),
  category = Joi.string().min();


// const createSaintSchema = Joi.object({
//   name: name.required(),
//   age: age.required(),
//   height: height.required(),
//   constelation: constelation.required(),
//   category: category.required()
// });

// const updateSaintSchema = Joi.object({
//   name: name,
//   age: age,
//   height: height,
//   constelation: constelation,
//   category: category
// });

const getSaintSchema = Joi.object({
  id: id.required()
});



module.exports = { createSaintSchema, updateSaintSchema, getSaintSchema }
