import { Request, Response, NextFunction } from 'express'

class LoginValidation {
  public async doLogin (req: Request, res: Response, next: NextFunction): Promise<void> {
    next()
  }
}
export default new LoginValidation()
