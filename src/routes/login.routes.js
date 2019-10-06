import { Router } from 'express'

import loginCtrl from '../controllers/login-controller'
import loginVal from '../validations/login-validation'

const router = Router()

// Login
router.post('/', loginVal.login, loginCtrl.login)

export default router
