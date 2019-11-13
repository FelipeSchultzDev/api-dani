import { Schema, model } from 'mongoose'

import PessoaInterface from './../core/pessoa.interface'

const Pessoa = new Schema({
  nome: { type: String, default: '' },
  sobrenome: { type: String, default: '' },
  nascimento: { type: Date, default: '' },
  genero: { type: String, default: '' },
  cpf: { type: String, min: 14, max: 14 },
  email: { type: String, lowercase: true, default: '' },
  senha: { type: String, default: '' },
  cns: { type: String, default: '' },
  nomeMae: { type: String, default: '' },
  nomePai: { type: String, default: '' },
  celular: { type: String, min: 14, max: 14, default: '' },
  telEmergencia: { type: String, min: 14, max: 14, default: '' },
  tpoSanguineo: { type: String, default: '' },
  medicamentos: { type: [Schema.Types.ObjectId], ref: 'Medicamento' },
  alAlimentos: { type: [Schema.Types.ObjectId] },
  condEspecial: { type: [Schema.Types.ObjectId] },
  atendimentos: { type: [Schema.Types.ObjectId], ref: 'Atendimento' }
}, {
  timestamps: false
})
export default model<PessoaInterface>('Pessoa', Pessoa)
