import Joi from 'joi'

const schema = Joi.object({
  nome: Joi.string().error((err): Error => {
    const TEMP = JSON.stringify({ field: err[0].path })
    return new Error(TEMP)
  })
})

export default schema
