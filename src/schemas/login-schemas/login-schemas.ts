import Joi, { ValidationErrorItem } from 'joi'

const msg = []
msg['any.empty'] = 'campo.vazio'
msg['any.required'] = 'campo.obrigatorio'
msg['string.email'] = 'email.invalido'
msg['any.allowOnly'] = 'resenha.invalida'

const schema = Joi.object({
  usuario: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  senha: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  })
}).required()

export default schema
