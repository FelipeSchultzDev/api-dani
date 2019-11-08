import { Document } from 'mongoose'

export default interface AtendimentoInterface extends Document {
    nome?: string
    medico?: Date
    cid?: string
    receita?: string
    data?: Date
    diagnóstico?: string
}
