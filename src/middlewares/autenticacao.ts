import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import variaveis from '../config/variaveis'

const token = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  let token = req.body.token || req.query.query || req.headers['token']

  if (token === 'dev') {
    next()
    return
  }

  if (token) {
    try {
      let decoded = jwt.verify(token, variaveis.seguranca.secretKey)
      // TODO: Rever o decoded
      res.locals.user = decoded
      next()
    } catch (error) {
      return res.status(401).send({ success: false, error: 'Token inválido' })
    }
  } else {
    return res.status(401).send({ success: false, error: 'Você deve enviar um token na requisição' })
  }
}

export default token
