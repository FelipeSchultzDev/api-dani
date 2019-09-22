import { Schema, model } from 'mongoose'

import TipoSanguineoInterface from '../core/tipo-sanfuineo.interface'

const TipoSanguineo = new Schema({
  nome: { type: String,
    required: true,
    validate: [{
      validator: async (nome: string): Promise<boolean> => {
        const search = await model('TipoSanguineo').find({ nome: nome })

        if (search.length) return false
      }
    }] }
}, {
  timestamps: false
})
export default model<TipoSanguineoInterface>('TipoSanguineo', TipoSanguineo)
