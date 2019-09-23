import { Router } from 'express'

// import controller from './../controllers/cliente-controller'
import validation from './../validations/paciente.validation'

const router = Router()

// Paciente
router.post('/paciente', validation.create)

export default router
