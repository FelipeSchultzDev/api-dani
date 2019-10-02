import { Schema, model } from 'mongoose'

import MedicamentoInterface from '../core/medicamento.interface'

const Medicamento = new Schema({
  nome: { type: String, required: true },
  apresentacao: { type: String,
    required: true,
    uppercase: true,
    validate: [{
      validator: async (apresentacao: string): Promise<boolean> => {
        const search = await model('Medicamento').find({ apresentacao: apresentacao })

        if (search.length) return false
      }
    }] },
  tarja: { type: String },
  pAtivo: { type: String }
}, {
  timestamps: false
})
export default model<MedicamentoInterface>('Medicamento', Medicamento)
