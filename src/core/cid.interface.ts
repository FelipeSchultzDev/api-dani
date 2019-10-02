import { Document } from 'mongoose'

export default interface CidInterface extends Document {
    nome?: string
    cid?: string
}
