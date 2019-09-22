import { Document } from 'mongoose'

export default interface TipoSanguineoInterface extends Document {
    nome?: string
}
