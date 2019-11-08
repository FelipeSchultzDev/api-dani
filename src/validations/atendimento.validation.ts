import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import util from '../util/util'

import criarSchema from '../schemas/atendimento-schemas/criarAtendimento.schema'

class PacienteValidacao {
  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { error } = Joi.validate(req.body, criarSchema, { abortEarly: false })

      if (error) {
        const errorList = util.joiErrorConvert(error)
        return res.status(200).json({ success: false, errorList })
      } else {
        next()
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }
}
export default new PacienteValidacao()
