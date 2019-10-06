import { Router } from 'express'

import controller from './../controllers/paciente.controller'
import validation from './../validations/paciente.validation'

const router = Router()

router.post('/paciente', validation.create, controller.create)

export default router
