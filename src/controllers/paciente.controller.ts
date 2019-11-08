import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'

import Console from './../util/logger'

class PacienteController {
  public async create (req: Request, res: Response): Promise<void> {
    PacienteModel.create(req.body)
      .then((): Response => {
        return res.status(200).json({ success: true })
      })
      .catch((): Response => {
        return res.status(200).json({ success: false, error: 'Falha ao cadastrar paciente' })
      })
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user

    try {
      const paciente = await PacienteModel.findById(id)
      return res.status(200).json({ success: true, paciente })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao cadastrar paciente' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user

    try {
      const paciente = await PacienteModel.findByIdAndUpdate(id, req.body, { new: true }).select('-senha -__v')
      return res.status(200).json({ success: true, paciente })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao atualizar paciente' })
    }
  }
}

export default new PacienteController()
