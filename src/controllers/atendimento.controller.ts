import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'
import AtendimentoModel from '../models/atendimento-model'
import CidModel from '../models/cid-model'
import MedicamentoModel from '../models/medicamento-model'

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

  public async getOptions (req: Request, res: Response): Promise<Response> {
    try {
      const doencasLista = await CidModel.find().select('-codigo -__v')
      const medicamentosLista = await MedicamentoModel.find().select('-codigo -pAtivo -tarja -__v')

      const doencas = doencasLista.map((doenca):Combo => {
        return {
          label: doenca.nome,
          value: doenca._id
        }
      })

      const medicamentos = medicamentosLista.map((doenca):Combo => {
        return {
          label: `${doenca.nome} - ${doenca.apresentacao}`,
          value: doenca._id
        }
      })

      return res.status(200).json({ success: true, combo: { doencas, medicamentos } })
    } catch (error) {
      Console.error(error)
      return res.status(500).json({ success: false, error: 'Falha ao listar doenças' })
    }
  }
}

export default new PacienteController()

interface Combo {
  label: string;
  value: any;
}
