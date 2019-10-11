import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import util from '../util/util'

import criarSchema from '../schemas/paciente-schemas/criarPaciente.schema'

import PacienteModel from '../models/pessoa-model'

class PacienteValidacao {
  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    let errorList = []
    const { error } = Joi.validate(req.body, criarSchema, { abortEarly: false })

    const validate = await PacienteModel.findOne({ cpf: req.body.cpf })

    if (validate) {
      errorList.push({ msg: 'cpf.ja.cadastrado', field: 'cpf' })
    } else if (!util.cpfValidation(req.body.cpf)) {
      errorList.push({ msg: 'cpf.invalido', field: 'cpf' })
    }

    if (errorList.length || error) {
      errorList = error ? errorList.concat(util.joiErrorConvert(error)) : errorList
      return res.status(200).json({ success: false, errorList })
    } else {
      req.body.senha = util.encode(req.body.senha)
      next()
    }
  }
}
export default new PacienteValidacao()
