import Console from './../util/logger'

import cidLista from './docs/cid'
import cidModel from '../models/cid-model'

import medicamentosLista from './docs/medicamentos'
import medicamentoModel from '../models/medicamento-model'

export const cid = async (): Promise<void> => {
  cidModel.insertMany(cidLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-scrpit] Carga de doenças completa')
    })
    .catch((): void => {
      Console.error('[mongoose-scrpit] Erro ao inserir a carga de doenças')
    })
}

export const medicamentos = async (): Promise<void> => {
  medicamentoModel.insertMany(medicamentosLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-scrpit] Carga de medicamentos completa')
    })
    .catch((): void => {
      Console.error('[mongoose-scrpit] Erro ao inserir a carga de medicamentos')
    })
}
