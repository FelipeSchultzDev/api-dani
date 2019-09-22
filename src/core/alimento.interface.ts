import { Document } from 'mongoose'

export default interface AlimentoInterface extends Document {
    nome?: string
}
