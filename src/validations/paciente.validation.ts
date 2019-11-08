import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import util from '../util/util'

import criarSchema from '../schemas/paciente-schemas/criarPaciente.schema'
import atualizarSchema from '../schemas/paciente-schemas/atualizarPaciente.schema'

import PacienteModel from '../models/pessoa-model'

class PacienteValidacao {
  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
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
    } catch (error) {
      console.log(error)
      return res.status(500).json()
    }
  }

  public async update (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let errorList = []
      const { error } = Joi.validate(req.body, atualizarSchema, { abortEarly: false })

      const { id } = res.locals.user

      if (req.body.cpf && !util.cpfValidation(req.body.cpf)) {
        errorList.push({ msg: 'cpf.invalido', field: 'cpf' })
      }

      errorList = error ? util.joiErrorConvert(error) : []

      errorList.concat(util.validate(id, req.body, 'Pessoa', [
        'cpf',
        'email',
        'cns'
      ]))

      if (errorList.length || error) {
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
