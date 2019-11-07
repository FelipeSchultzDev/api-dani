import { Schema, model } from 'mongoose'

import PessoaInterface from './../core/pessoa.interface'

const Pessoa = new Schema({
  nome: { type: String, lowercase: true, default: '' },
  sobrenome: { type: String, lowercase: true, default: '' },
  nascimento: { type: Date, lowercase: true, default: '' },
  sexo: { type: String, default: '' },
  cpf: { type: String, min: 14, max: 14 },
  email: { type: String, default: '' },
  senha: { type: String, default: '' },
  cns: { type: String, default: '' },
  nomeMae: { type: String, default: '' },
  nomePai: { type: String, default: '' },
  celular: { type: String, min: 14, max: 14, default: '' },
  telEmergencia: { type: String, min: 14, max: 14, default: '' },
  tpoSanguineo: { type: String, default: '' },
  medicamentos: { type: [Schema.Types.ObjectId] },
  alAlimentos: { type: [Schema.Types.ObjectId] },
  condEspecial: { type: [Schema.Types.ObjectId] }
}, {
  timestamps: false
})
export default model<PessoaInterface>('Pessoa', Pessoa)
