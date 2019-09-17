import { Schema, model } from 'mongoose'

import PessoaInterface from './../core/pessoa.interface'

const Pessoa = new Schema({
  nome: { type: String, lowercase: true },
  nascimento: { type: Date, lowercase: true },
  sexo: { type: String },
  cpf: { type: String,
    min: 14,
    max: 14,
    validate: [{
      validator: async (cpf: string): Promise<boolean> => {
        let search = await model('Pessoa').find({ cpf: cpf.toLowerCase() })

        if (search.length > 0) return false
      }
    }] },
  email: { type: String },
  senha: { type: String, required: true },
  cns: { type: String, required: true, unique: true },
  nomeMae: { type: String },
  nomePaiae: { type: String },
  celular: { type: String, min: 14, max: 14 },
  telEmergencia: { type: String, min: 14, max: 14 },
  crm: { type: String },
  especialidade: { type: Schema.Types.ObjectId },
  tpoSanguineo: { type: Schema.Types.ObjectId },
  medicamentos: { type: [Schema.Types.ObjectId] },
  alAlimentos: { type: [Schema.Types.ObjectId] },
  doencaCronica: { type: [Schema.Types.ObjectId] },
  condEspecial: { type: [Schema.Types.ObjectId] }
}, {
  timestamps: false
})
export default model<PessoaInterface>('Pessoa', Pessoa)

// validate: [{
//   validator: async (cns: string): Promise<boolean> => {
//     let search = await model('Pessoa').find({ cns: cns.toLowerCase() })

//     if (search.length > 0) return false
//   }
// }]
