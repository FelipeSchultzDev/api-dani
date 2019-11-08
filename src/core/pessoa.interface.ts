import { Document } from 'mongoose'

export default interface PessoaInterface extends Document {
    nome?: string
    nascimento?: Date
    sexo?: string
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
    medicamentos?: []
    alAlimentos?: []
    doencaCronica?: []
    condEspecial?: []
    atendimentos?: []
}
