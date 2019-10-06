import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import LoginSchema from '../schemas/login-schemas/login-schemas'

import util from '../util/util'

class LoginValidation {
  public async login (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { error } = Joi.validate(req.body, LoginSchema, { abortEarly: false })

    if (error) {
      const errorList = util.joiErrorConvert(error)
      return res.status(200).json({ success: false, errorList })
    } else {
      next()
    }
  }
}
export default new LoginValidation()
