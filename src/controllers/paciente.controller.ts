import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'

class PacienteController {
  public async create (req: Request, res: Response): Promise<void> {
    PacienteModel.create(req.body)
      .then((): Response => {
        return res.status(200).json({ success: true })
      })
      .catch((err): Response => {
        console.log(err)
        return res.status(200).json({ success: false, error: 'Falha ao cadastrar paciente' })
      })
  }
}

export default new PacienteController()
