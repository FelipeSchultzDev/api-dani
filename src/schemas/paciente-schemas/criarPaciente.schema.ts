import Joi, { ValidationErrorItem } from 'joi'

const msg = []
msg['any.empty'] = 'campo.vazio'
msg['any.required'] = 'campo.obrigatorio'
msg['string.email'] = 'email.invalido'
msg['any.allowOnly'] = 'resenha.invalida'

const schema = Joi.object({
  nome: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  sobrenome: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  cpf: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  email: Joi.string().email().required().error((errors): ValidationErrorItem[] => {
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
  }),
  reSenha: Joi.equal(Joi.ref('senha')).error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  })
}).required()

export default schema
