import { Router } from 'express'

import jwt from '../security/autenticacao'

import controller from './../controllers/atendimento.controller'
import validation from './../validations/atendimento.validation'

const router = Router()

router.post('/', jwt, validation.create, controller.create)

export default router
