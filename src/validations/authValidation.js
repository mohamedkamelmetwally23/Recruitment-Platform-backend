const Joi = require("joi");

const registerSchema = Joi.object({
  role: Joi.string().valid("job_seeker", "company").required().messages({
    "any.only": "Role must be either job_seeker or company",
    "any.required": "Role is required",
  }),

  name: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().min(2).max(100).required(),
    otherwise: Joi.string().trim().allow(""),
  }),

  title: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(150),
    otherwise: Joi.string().trim().allow(""),
  }),

  location: Joi.string().trim().allow("").max(150),

  experience: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(100),
    otherwise: Joi.string().trim().allow(""),
  }),

  education: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(200),
    otherwise: Joi.string().trim().allow(""),
  }),

  skills: Joi.when("role", {
    is: "job_seeker",
    then: Joi.array().items(Joi.string().trim()).default([]),
    otherwise: Joi.array().items(Joi.string().trim()).default([]),
  }),

  certifications: Joi.when("role", {
    is: "job_seeker",
    then: Joi.array().items(Joi.string().trim()).default([]),
    otherwise: Joi.array().items(Joi.string().trim()).default([]),
  }),

  preferredField: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().min(2).max(100).required(),
    otherwise: Joi.string().trim().allow(""),
  }),

  bio: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(1000),
    otherwise: Joi.string().trim().allow(""),
  }),

  companyName: Joi.when("role", {
    is: "company",
    then: Joi.string().trim().min(2).max(150).required(),
    otherwise: Joi.string().trim().allow(""),
  }),

  industry: Joi.when("role", {
    is: "company",
    then: Joi.string().trim().min(2).max(100).required(),
    otherwise: Joi.string().trim().allow(""),
  }),

  email: Joi.string().trim().lowercase().email().required(),

  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  role: Joi.string().valid("job_seeker", "company").required(),

  email: Joi.string().trim().lowercase().email().required(),

  password: Joi.string().required(),
});

const updateMeSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100),

  title: Joi.string().trim().allow("").max(150),

  location: Joi.string().trim().allow("").max(150),

  experience: Joi.string().trim().allow("").max(100),

  education: Joi.string().trim().allow("").max(200),

  skills: Joi.array().items(Joi.string().trim()),

  certifications: Joi.array().items(Joi.string().trim()),

  preferredField: Joi.string().trim().allow("").max(100),

  bio: Joi.string().trim().allow("").max(1000),

  companyName: Joi.string().trim().allow("").max(150),

  industry: Joi.string().trim().allow("").max(100),

  email: Joi.string().trim().lowercase().email(),
})
  .min(1)
  .messages({
    "object.min": "At least one field is required to update profile",
  });

module.exports = {
  registerSchema,
  loginSchema,
  updateMeSchema,
};
