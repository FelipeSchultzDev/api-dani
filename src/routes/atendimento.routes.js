import { Router } from 'express'

import jwt from '../security/autenticacao'

import controller from './../controllers/atendimento.controller'
import validation from './../validations/atendimento.validation'

const router = Router()

router.post('/', jwt, validation.create, controller.create)
router.get('/', jwt, controller.getAll)
router.get('/combo', jwt, controller.getOptions)

export default router
