import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import PacienteModel from '../models/pessoa-model'

import variables from './../config/variaveis'
import util from './../util/util'

class LoginController {
  public async login (req: Request, res: Response): Promise<Response> {
    const paciente = await PacienteModel.findOne({
      email: req.body.usuario,
      senha: util.encode(req.body.senha)
    })

    if (!paciente) return res.status(401).json({ success: false, error: 'usuario.ou.senha.incorreta' })

    const user = {
      id: paciente._id,
      usuario: paciente.email
    }

    const token = jwt.sign({ user }, variables.seguranca.secretKey, {
      expiresIn: 14400
    })

    return res.status(200).json({ success: true, token: token })
  }
}

export default new LoginController()
