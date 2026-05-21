const Joi = require("joi");

const registerSchema = Joi.object({
  role: Joi.string().valid("job_seeker", "company").required().messages({
    "any.only": "Role must be either job_seeker or company",
    "any.required": "Role is required",
  }),

  // Job seeker fields
  name: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().min(2).max(100).required().messages({
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),
    otherwise: Joi.string().trim().allow(""),
  }),

  title: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(150),
    otherwise: Joi.string().trim().allow(""),
  }),

  location: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(150),
    otherwise: Joi.string().trim().allow(""),
  }),

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
    then: Joi.string().trim().min(2).max(100).required().messages({
      "string.empty": "Preferred field is required",
      "any.required": "Preferred field is required",
    }),
    otherwise: Joi.string().trim().allow(""),
  }),

  bio: Joi.when("role", {
    is: "job_seeker",
    then: Joi.string().trim().allow("").max(1000),
    otherwise: Joi.string().trim().allow(""),
  }),

  // Company fields
  companyName: Joi.when("role", {
    is: "company",
    then: Joi.string().trim().min(2).max(150).required().messages({
      "string.empty": "Company name is required",
      "any.required": "Company name is required",
    }),
    otherwise: Joi.string().trim().allow(""),
  }),

  industry: Joi.when("role", {
    is: "company",
    then: Joi.string().trim().min(2).max(100).required().messages({
      "string.empty": "Industry is required",
      "any.required": "Industry is required",
    }),
    otherwise: Joi.string().trim().allow(""),
  }),

  companyLocation: Joi.when("role", {
    is: "company",
    then: Joi.string().trim().min(2).max(150).required().messages({
      "string.empty": "Company location is required",
      "any.required": "Company location is required",
    }),
    otherwise: Joi.string().trim().allow(""),
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

const loginSchema = Joi.object({
  role: Joi.string().valid("job_seeker", "company").required().messages({
    "any.only": "Role must be either job_seeker or company",
    "any.required": "Role is required",
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),

  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
