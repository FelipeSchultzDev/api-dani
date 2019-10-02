import { Document } from 'mongoose'

export default interface MedicamentoInterface extends Document {
    nome?: string
    cid?: string
}
