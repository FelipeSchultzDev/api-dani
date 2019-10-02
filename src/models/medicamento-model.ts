import { Schema, model } from 'mongoose'

import MedicamentoInterface from '../core/medicamento.interface'

const Medicamento = new Schema({
  apresentacao: { type: String,
    required: true,
    uppercase: true,
    validate: [{
      validator: async (codigo: string): Promise<boolean> => {
        const search = await model('Medicamento').find({ codigo: codigo })

        if (search.length) return false
      }
    }] },
  nome: { type: String, required: true }
}, {
  timestamps: false
})
export default model<MedicamentoInterface>('Medicamento', Medicamento)