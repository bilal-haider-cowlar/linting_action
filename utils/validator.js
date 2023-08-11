const Joi = require('joi')

const validator = (schema) => (payload) => {
  return schema.validate(payload, { abortEarly: false })
}

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(10).required(),
})

exports.validateEmailPassword = validator(signupSchema)
