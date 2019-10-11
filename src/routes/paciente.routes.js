import { Router } from 'express'

import jwt from '../security/autenticacao'

import controller from './../controllers/paciente.controller'
import validation from './../validations/paciente.validation'

const router = Router()

router.post('/paciente', validation.create, controller.create)
router.get('/paciente', jwt, controller.getById)

export default router
