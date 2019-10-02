import { Document } from 'mongoose'

export default interface MedicamentoInterface extends Document {
    nome?: string
    apresentacao?: string
    pAtivo?: string
    tarja?: string
}