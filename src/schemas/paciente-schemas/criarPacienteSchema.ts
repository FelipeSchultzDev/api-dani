import Joi from 'joi'

const msg = []
msg['empty'] = 'teste'

const schema = Joi.object({
  nome: Joi.string().error((err): Error => {
    const TEMP = JSON.stringify({
      field: err[0].path[0],
      msg: msg[err[0].type.replace('any.', '')]
    })
    return new Error(TEMP)
  }),
  sobrenome: Joi.string().required(),
  cpf: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
  reSenha: Joi.ref('senha')
})

export default schema
