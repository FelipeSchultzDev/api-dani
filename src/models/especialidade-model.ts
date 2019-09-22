import { Schema, model } from 'mongoose'

import EspecialidadeInterface from '../core/especialidade.interface'

const Especialidade = new Schema({
  nome: { type: String,
    required: true,
    validate: [{
      validator: async (nome: string): Promise<boolean> => {
        const search = await model('Especialidade').find({ nome: nome })

        if (search.length) return false
      }
    }] }
}, {
  timestamps: false
})
export default model<EspecialidadeInterface>('Especialidade', Especialidade)
