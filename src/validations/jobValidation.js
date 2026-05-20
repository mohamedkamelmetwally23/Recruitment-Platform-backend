const Joi = require("joi");

/**
 * CREATE JOB
 */
const createJobSchema = Joi.object({
  title: Joi.string().trim().min(2).max(100).required(),
  company: Joi.string().trim().min(2).max(100).required(),
  location: Joi.string().trim().required(),
  type: Joi.string()
    .valid("Full-time", "Part-time", "Contract", "Remote", "Internship")
    .required(),
  salary: Joi.string().trim().required(),
  category: Joi.string().trim().required(),
  postedAt: Joi.string().trim().required(),
  experience: Joi.string().trim().required(),
  skills: Joi.array().items(Joi.string().trim()).min(1).required(),
  description: Joi.string().trim().min(20).required(),
  benefits: Joi.array().items(Joi.string().trim()).default([]),
  isSaved: Joi.boolean().default(false),
  isActive: Joi.boolean().default(true),
});

/**
 * UPDATE / PATCH JOB
 */
const updateJobSchema = Joi.object({
  title: Joi.string().trim().min(2).max(100),
  company: Joi.string().trim().min(2).max(100),
  location: Joi.string().trim(),
  type: Joi.string().valid(
    "Full-time",
    "Part-time",
    "Contract",
    "Remote",
    "Internship",
  ),
  salary: Joi.string().trim(),
  category: Joi.string().trim(),
  postedAt: Joi.string().trim(),
  experience: Joi.string().trim(),
  skills: Joi.array().items(Joi.string().trim()).min(1),
  description: Joi.string().trim().min(20),
  benefits: Joi.array().items(Joi.string().trim()),
  isSaved: Joi.boolean(),
  isActive: Joi.boolean(),
}).min(1);

module.exports = {
  createJobSchema,
  updateJobSchema,
};
