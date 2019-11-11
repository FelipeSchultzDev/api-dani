import { Document } from 'mongoose'

export default interface AtendimentoInterface extends Document {
    nome?: string
    medico?: string
    cid?: {
        nome: string
    };
    dosagem?: string
    medicamento?: string
    data?: Date
    diagnóstico?: string
}
