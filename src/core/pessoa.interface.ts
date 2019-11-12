import { Document } from 'mongoose'

export default interface PessoaInterface extends Document {
    nome?: string
    nascimento?: Date
    genero?: string
    cpf?: string
    email?: string
    cns?: string
    nomeMae?: string
    nomePai?: string
    celular?: string
    crm?: string
    expecialidade?: string
    telEmergencia?: string
    tpoSanguineo?: string
    medicamentos?: any[]
    alAlimentos?: any[]
    doencaCronica?: any[]
    condEspecial?: any[]
    atendimentos?: any[]
}
