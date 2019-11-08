import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'
import MedicamentoModel from '../models/medicamento-model'
import AlimentoModel from '../models/alimento-model'
import CidModel from '../models/cid-model'

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

  public async getComboOptions (req: Request, res: Response): Promise<Response> {
    try {
      const medicamentosLista = await MedicamentoModel.find().select('-__v -tarja -pAtivo')
      const alimentoLista = await AlimentoModel.find().select('-__v')
      const CidLista = await CidModel.find().select('-__v -codigo')

      const medicamentos = medicamentosLista.map((alimento): { [key: string]: any } => {
        return {
          label: `${alimento.nome} - ${alimento.apresentacao}`,
          value: alimento._id
        }
      })

      const alimentos = alimentoLista.map((alimento): { [key: string]: any } => {
        return {
          label: alimento.nome,
          value: alimento._id
        }
      })

      const doencas = CidLista.map((doenca): { [key: string]: any } => {
        return {
          label: doenca.nome,
          value: doenca._id
        }
      })

      const combo = {
        medicamentos,
        alimentos,
        doencas
      }

      return res.status(200).json({ success: true, combo })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao atualizar paciente' })
    }
  }
}

export default new PacienteController()
