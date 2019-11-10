import Joi, { ValidationErrorItem } from 'joi'

const msg = []
msg['any.empty'] = 'campo.vazio'
msg['any.required'] = 'campo.obrigatorio'

msg['date.base'] = 'campo.deve.ser.date'

const schema = Joi.object({
  nome: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  medico: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  cid: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  dosagem: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  medicamento: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  data: Joi.date().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  }),
  diagnóstico: Joi.string().required().error((errors): ValidationErrorItem[] => {
    errors.forEach((err): void => {
      err.message = msg[err.type]
    })
    return errors
  })
}).required()

export default schema
