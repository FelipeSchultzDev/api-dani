import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import criarSchema from '../schemas/paciente-schemas/criarPacienteSchema'

class PacienteValidacao {
  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { error, value } = Joi.validate(req.body, criarSchema, { abortEarly: false })
    console.log(error, value)
    // next()
    return res.status(200).json()
  }
}
export default new PacienteValidacao()
