import { Schema, model } from 'mongoose'

import CondicaoEspecialInterface from '../core/condicao.interface'

const CondicaoEspecial = new Schema({
  nome: { type: String,
    required: true,
    validate: [{
      validator: async (nome: string): Promise<boolean> => {
        const search = await model('CondicaoEspecial').find({ nome: nome })

        if (search.length) return false
      }
    }] }
}, {
  timestamps: false
})
export default model<CondicaoEspecialInterface>('CondicaoEspecial', CondicaoEspecial)
