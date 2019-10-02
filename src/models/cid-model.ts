import { Schema, model } from 'mongoose'

import CidInterface from '../core/cid.interface'

const Cid = new Schema({
  codigo: { type: String,
    required: true,
    uppercase: true,
    validate: [{
      validator: async (codigo: string): Promise<boolean> => {
        const search = await model('Cid').find({ codigo: codigo })

        if (search.length) return false
      }
    }] },
  nome: { type: String, required: true }
}, {
  timestamps: false
})
export default model<CidInterface>('Cid', Cid)
