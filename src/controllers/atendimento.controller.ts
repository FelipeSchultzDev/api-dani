import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'
import AtendimentoModel from '../models/atendimento-model'

import Console from './../util/logger'

class PacienteController {
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.user

      const atendimento = await AtendimentoModel.create(req.body)

      await PacienteModel.findByIdAndUpdate(id, {
        '$push': {
          atendimentos: atendimento._id
        }
      }, {
        new: true
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      Console.error(error)
      return res.status(500).json({ success: false, error: 'Falha ao atendimento paciente' })
    }
  }
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.user

      const { atendimentos } = await PacienteModel.findById(id).populate('atendimentos', 'nome data medico cid -_id', 'Atendimento')
      return res.status(200).json({ success: true, atendimentos })
    } catch (error) {
      Console.error(error)
      return res.status(500).json({ success: false, error: 'Falha ao atendimento paciente' })
    }
  }
}

export default new PacienteController()
