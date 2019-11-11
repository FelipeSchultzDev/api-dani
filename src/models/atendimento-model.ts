import { Schema, model, Types } from 'mongoose'

import AtendimentoInterface from './../core/atendimento.interface'

const Atendimento = new Schema({
  nome: { type: String, lowercase: true, default: '' },
  medico: { type: String, lowercase: true, default: '' },
  cid: { type: Types.ObjectId, ref: 'Cid' },
  dosagem: { type: String, default: '' },
  medicamento: { type: Types.ObjectId, ref: 'Medicamento' },
  data: { type: Date, default: '' },
  diagnostico: { type: String, default: '' }
}, {
  timestamps: false
})
export default model<AtendimentoInterface>('Atendimento', Atendimento)
