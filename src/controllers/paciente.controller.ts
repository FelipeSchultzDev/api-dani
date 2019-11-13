import { Request, Response } from 'express'

import PacienteModel from '../models/pessoa-model'
import MedicamentoModel from '../models/medicamento-model'
import AlimentoModel from '../models/alimento-model'
import CondicaoModel from '../models/condicao-model'

import Console from './../util/logger'

const field = [
  'nome',
  'sobrenome',
  'nascimento',
  'genero',
  'cpf',
  'email',
  'cns',
  'nomeMae',
  'nomePai',
  'celular',
  'crm',
  'expecialidade',
  'telEmergencia',
  'tpoSanguineo',
  'medicamentos',
  'alAlimentos',
  'doencaCronica',
  'condEspecial',
  'atendimentos'
]

class PacienteController {
  public async create (req: Request, res: Response): Promise<void> {
    PacienteModel.create(req.body)
      .then((): Response => {
        return res.status(200).json({ success: true })
      })
      .catch((error): Response => {
        Console.error(error)
        return res.status(200).json({ success: false, error: 'Falha ao cadastrar paciente' })
      })
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user

    try {
      const paciente = await PacienteModel.findById(id)
        .select('-atendimentos -senha -__v')
        .populate('medicamentos', '-_id nome apresentacao', 'Medicamento')
        .populate('alAlimentos', '-_id nome', 'Alimento')
        .populate('condEspecial', '-_id nome', 'CondicaoEspecial')

      const newPaciente: any = {}

      field.forEach((key): void => {
        newPaciente[key] = paciente[key]
      })
      // console.log(paciente)

      newPaciente.medicamentos = paciente.medicamentos.map((medicamento): string => `${medicamento.nome} - ${medicamento.apresentacao}`)
      newPaciente.alAlimentos = paciente.alAlimentos.map((alimento): string => alimento.nome)
      newPaciente.condEspecial = paciente.condEspecial.map((condicao): string => condicao.nome)

      return res.status(200).json({ success: true, paciente: newPaciente })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao cadastrar paciente' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user

    try {
      console.log(req.body)
      
      const paciente = await PacienteModel.findByIdAndUpdate(id, req.body, { new: true }).select('-senha -__v')
      return res.status(200).json({ success: true, paciente })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao atualizar paciente' })
    }
  }

  public async getComboOptions (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.user
      const medicamentosLista = await MedicamentoModel.find().select('-__v -tarja -pAtivo')
      const alimentoLista = await AlimentoModel.find().select('-__v')
      const CondicaoLista = await CondicaoModel.find().select('-__v -codigo')
      const paciente = await PacienteModel.findById(id).select('-__v -_id -senha')

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

      const condicao = CondicaoLista.map((doenca): { [key: string]: any } => {
        return {
          label: doenca.nome,
          value: doenca._id
        }
      })

      const combo = {
        medicamentos,
        alimentos,
        condicao
      }

      return res.status(200).json({ success: true, combo, paciente })
    } catch (error) {
      Console.error(error)
      return res.status(200).json({ success: false, error: 'Falha ao atualizar paciente' })
    }
  }
}

export default new PacienteController()
