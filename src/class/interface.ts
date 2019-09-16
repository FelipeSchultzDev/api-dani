import { Document } from 'mongoose'

export interface AcessosInterface extends Document {
    usuario?: string
    senha?: string
}
