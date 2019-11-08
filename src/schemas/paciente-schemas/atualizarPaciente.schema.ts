import Joi, { ValidationErrorItem } from 'joi'

const msg = []
msg['any.empty'] = 'campo.vazio'
msg['any.required'] = 'campo.obrigatorio'
msg['string.email'] = 'email.invalido'
msg['any.allowOnly'] = 'resenha.invalida'

msg['string.base'] = 'campo.deve.ser.string'
msg['array.base'] = 'campo.deve.ser.array'
msg['date.base'] = 'campo.deve.ser.date'

const schema = Joi.object({
  nome: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  sobrenome: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  nascimento: Joi.date().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  sexo: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  cpf: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  cns: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  nomeMae: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  nomePai: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  celular: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  telEmergencia: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  tpoSanguineo: Joi.string().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  medicamentos: Joi.array().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  alAlimentos: Joi.array().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  condEspecial: Joi.array().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  email: Joi.string().email().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  })
})

export default schema
