import { Schema, model } from 'mongoose'

import AlimentoInterface from '../core/alimento.interface'

const Alimento = new Schema({
  nome: { type: String,
    required: true,
    validate: [{
      validator: async (nome: string): Promise<boolean> => {
        const search = await model('Alimento').find({ nome: nome })

        if (search.length) return false
      }
    }] }
}, {
  timestamps: false
})
export default model<AlimentoInterface>('Alimento', Alimento)
