import { Schema, model } from 'mongoose'

import DoencaInterface from '../core/doenca.interface'

const Doenca = new Schema({
  cid: { type: String,
    required: true,
    uppercase: true,
    validate: [{
      validator: async (cid: string): Promise<boolean> => {
        const search = await model('Doenca').find({ cid: cid })

        if (search.length) return false
      }
    }] },
  nome: { type: String, required: true }
}, {
  timestamps: false
})
export default model<DoencaInterface>('Doenca', Doenca)
