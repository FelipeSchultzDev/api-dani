import { Router } from 'express'

import jwt from '../security/autenticacao'

import controller from './../controllers/paciente.controller'
import validation from './../validations/paciente.validation'

const router = Router()

router.post('/', validation.create, controller.create)
router.get('/', jwt, controller.getById)
router.put('/', jwt, validation.update, controller.update)

router.get('/combo', jwt, controller.getComboOptions)

export default router
