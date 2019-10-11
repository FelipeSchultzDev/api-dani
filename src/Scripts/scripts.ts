import Console from './../util/logger'

import alimentosLista from './docs/alimentos'
import alimentosModel from '../models/alimento-model'

import cidLista from './docs/cid'
import cidModel from '../models/cid-model'

import condicaoLista from './docs/condicao'
import condicaoModel from '../models/condicao-model'

import especialidadeLista from './docs/especialidade'
import especialidadeModel from '../models/especialidade-model'

import medicamentosLista from './docs/medicamentos'
import medicamentoModel from '../models/medicamento-model'

export const alimentos = async (): Promise<void> => {
  const validate = await alimentosModel.find()

  if (!(validate.length < alimentosLista.length)) {
    return Console.success('[mongoose-script] Carga de alimentos completa')
  }

  alimentosModel.insertMany(alimentosLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-script] Carga de alimentos completa')
    })
    .catch((): void => {
      Console.error('[mongoose-script] Erro ao inserir a carga de alimentos')
    })
}

export const cid = async (): Promise<void> => {
  const validate = await cidModel.find()

  if (!(validate.length < cidLista.length)) {
    return Console.success('[mongoose-script] Carga de doenças completa')
  }

  cidModel.insertMany(cidLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-script] Carga de doenças completa')
    })
    .catch((): void => {
      Console.error('[mongoose-script] Erro ao inserir a carga de doenças')
    })
}

export const condicao = async (): Promise<void> => {
  const validate = await condicaoModel.find()

  if (!(validate.length < condicaoLista.length)) {
    return Console.success('[mongoose-script] Carga de condições completa')
  }

  condicaoModel.insertMany(condicaoLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-script] Carga de condições completa')
    })
    .catch((): void => {
      Console.error('[mongoose-script] Erro ao inserir a carga de condições')
    })
}

export const especialidade = async (): Promise<void> => {
  const validate = await especialidadeModel.find()

  if (!(validate.length < especialidadeLista.length)) {
    return Console.success('[mongoose-script] Carga de especialidades completa')
  }

  especialidadeModel.insertMany(especialidadeLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-script] Carga de especialidades completa')
    })
    .catch((): void => {
      Console.error('[mongoose-script] Erro ao inserir a carga de especialidades')
    })
}

export const medicamentos = async (): Promise<void> => {
  const validate = await medicamentoModel.find()

  if (!(validate.length < medicamentosLista.length)) {
    return Console.success('[mongoose-script] Carga de medicamentos completa')
  }

  medicamentoModel.insertMany(medicamentosLista, { ordered: false })
    .then((): void => {
      Console.success('[mongoose-script] Carga de medicamentos completa')
    })
    .catch((): void => {
      Console.error('[mongoose-script] Erro ao inserir a carga de medicamentos')
    })
}
