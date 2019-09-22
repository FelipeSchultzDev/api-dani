import { Document } from 'mongoose'

export default interface DoencaInterface extends Document {
    nome?: string
    cid?: string
}
