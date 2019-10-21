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
  Console.info('[mongoose-script] Inserção de alimentos iniciada')
  return new Promise((resolve, reject): void => {
    alimentosModel.countDocuments(null, (err, count): void => {
      if (err) {
        Console.error('[mongoose-script] Erro ao inserir a carga de alimentos')
        reject(new Error('Erro ao inserir a carga de alimentos'))
      }

      if (count < alimentosLista.length) {
        alimentosModel.insertMany(alimentosLista, { ordered: false })
          .then((): void => {
            Console.success('[mongoose-script] Carga de alimentos completa')
            resolve()
          })
          .catch((): void => {
            Console.error('[mongoose-script] Erro ao inserir a carga de alimentos')
            reject(new Error('Erro ao inserir a carga de alimentos'))
          })
      } else {
        Console.success('[mongoose-script] Carga de alimentos completa')
        resolve()
      }
    })
  })
}

export const cid = async (): Promise<void> => {
  Console.info('[mongoose-script] Inserção de doenças iniciada')
  return new Promise((resolve, reject): void => {
    cidModel.countDocuments(null, (err, count): void => {
      if (err) {
        Console.error('[mongoose-script] Erro ao inserir a carga de doenças')
        reject(new Error('Erro ao inserir a carga de doenças'))
      }

      if (count < cidLista.length) {
        console.log(1)
        cidModel.insertMany(cidLista, { ordered: false })
          .then((): void => {
            Console.success('[mongoose-script] Carga de doenças completa')
            resolve()
          })
          .catch((): void => {
            Console.error('[mongoose-script] Erro ao inserir a carga de doenças')
            reject(new Error('Erro ao inserir a carga de doenças'))
          })
      } else {
        Console.success('[mongoose-script] Carga de doenças completa')
        resolve()
      }
    })
  })
}

export const condicao = async (): Promise<void> => {
  Console.info('[mongoose-script] Inserção de condições iniciada')
  return new Promise((resolve, reject): void => {
    condicaoModel.countDocuments(null, (err, count): void => {
      if (err) {
        Console.error('[mongoose-script] Erro ao inserir a carga de condições')
        reject(new Error('Erro ao inserir a carga de condições'))
      }

      if (count < condicaoLista.length) {
        condicaoModel.insertMany(condicaoLista, { ordered: false })
          .then((): void => {
            Console.success('[mongoose-script] Carga de condições completa')
            resolve()
          })
          .catch((): void => {
            Console.error('[mongoose-script] Erro ao inserir a carga de condições')
            reject(new Error('Erro ao inserir a carga de condições'))
          })
      } else {
        Console.success('[mongoose-script] Carga de condições completa')
        resolve()
      }
    })
  })
}

export const especialidade = async (): Promise<void> => {
  Console.info('[mongoose-script] Inserção de especialidade iniciada')
  return new Promise((resolve, reject): void => {
    especialidadeModel.countDocuments(null, (err, count): void => {
      if (err) {
        Console.error('[mongoose-script] Erro ao inserir a carga de especialidades')
        reject(new Error('Erro ao inserir a carga de especialidades'))
      }

      if (count < especialidadeLista.length) {
        especialidadeModel.insertMany(especialidadeLista, { ordered: false })
          .then((): void => {
            Console.success('[mongoose-script] Carga de especialidades completa')
            resolve()
          })
          .catch((): void => {
            Console.error('[mongoose-script] Erro ao inserir a carga de especialidades')
            reject(new Error('Erro ao inserir a carga de especialidades'))
          })
      } else {
        Console.success('[mongoose-script] Carga de especialidades completa')
        resolve()
      }
    })
  })
}

export const medicamentos = async (): Promise<void> => {
  Console.info('[mongoose-script] Inserção de medicamento iniciada')
  return new Promise((resolve, reject): void => {
    medicamentoModel.countDocuments(null, (err, count): void => {
      if (err) {
        Console.error('[mongoose-script] Erro ao inserir a carga de medicamentos')
        reject(new Error('Erro ao inserir a carga de medicamentos'))
      }

      if (count < medicamentosLista.length) {
        medicamentoModel.insertMany(medicamentosLista, { ordered: false })
          .then((): void => {
            Console.success('[mongoose-script] Carga de medicamentos completa')
            resolve()
          })
          .catch((): void => {
            Console.error('[mongoose-script] Erro ao inserir a carga de medicamentos')
            reject(new Error('Erro ao inserir a carga de medicamentos'))
          })
      } else {
        Console.success('[mongoose-script] Carga de medicamentos completa')
        resolve()
      }
    })
  })
}
