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
  alimentosModel.countDocuments(null, (err, count): void => {
    if (err) return Console.error('[mongoose-script] Erro ao inserir a carga de alimentos')

    if (count > alimentosLista.length) {
      alimentosModel.insertMany(alimentosLista, { ordered: false })
        .then((): void => {
          Console.success('[mongoose-script] Carga de alimentos completa')
        })
        .catch((): void => {
          Console.error('[mongoose-script] Erro ao inserir a carga de alimentos')
        })
    } else {
      Console.success('[mongoose-script] Carga de alimentos completa')
    }
  })
}

export const cid = async (): Promise<void> => {
  cidModel.countDocuments(null, (err, count): void => {
    if (err) return Console.error('[mongoose-script] Erro ao inserir a carga de doenças')

    if (count > cidLista.length) {
      cidModel.insertMany(cidLista, { ordered: false })
        .then((): void => {
          Console.success('[mongoose-script] Carga de doenças completa')
        })
        .catch((): void => {
          Console.error('[mongoose-script] Erro ao inserir a carga de doenças')
        })
    } else {
      Console.success('[mongoose-script] Carga de doenças completa')
    }
  })
}

export const condicao = async (): Promise<void> => {
  condicaoModel.countDocuments(null, (err, count): void => {
    if (err) return Console.error('[mongoose-script] Erro ao inserir a carga de condições')

    if (count > condicaoLista.length) {
      condicaoModel.insertMany(condicaoLista, { ordered: false })
        .then((): void => {
          Console.success('[mongoose-script] Carga de condições completa')
        })
        .catch((): void => {
          Console.error('[mongoose-script] Erro ao inserir a carga de condições')
        })
    } else {
      Console.success('[mongoose-script] Carga de condições completa')
    }
  })
}

export const especialidade = async (): Promise<void> => {
  especialidadeModel.countDocuments(null, (err, count): void => {
    if (err) return Console.error('[mongoose-script] Erro ao inserir a carga de especialidades')

    if (count > especialidadeLista.length) {
      especialidadeModel.insertMany(especialidadeLista, { ordered: false })
        .then((): void => {
          Console.success('[mongoose-script] Carga de especialidades completa')
        })
        .catch((): void => {
          Console.error('[mongoose-script] Erro ao inserir a carga de especialidades')
        })
    } else {
      Console.success('[mongoose-script] Carga de especialidades completa')
    }
  })
}

export const medicamentos = async (): Promise<void> => {
  medicamentoModel.countDocuments(null, (err, count): void => {
    if (err) return Console.error('[mongoose-script] Erro ao inserir a carga de medicamentos')

    if (count > medicamentosLista.length) {
      medicamentoModel.insertMany(medicamentosLista, { ordered: false })
        .then((): void => {
          Console.success('[mongoose-script] Carga de medicamentos completa')
        })
        .catch((): void => {
          Console.error('[mongoose-script] Erro ao inserir a carga de medicamentos')
        })
    } else {
      Console.success('[mongoose-script] Carga de medicamentos completa')
    }
  })
}
