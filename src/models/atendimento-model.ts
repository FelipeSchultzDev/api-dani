import { Schema, model } from 'mongoose'

import AtendimentoInterface from './../core/atendimento.interface'

const Atendimento = new Schema({
  nome: { type: String, lowercase: true, default: '' },
  medico: { type: String, lowercase: true, default: '' },
  cid: { type: String, lowercase: true, default: '' },
  receita: { type: String, default: '' },
  data: { type: Date, default: '' },
  diagnóstico: { type: String, default: '' }
}, {
  timestamps: false
})
export default model<AtendimentoInterface>('Atendimento', Atendimento)
