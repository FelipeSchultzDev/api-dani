import express from 'express'
import cors from 'cors'
import { connect, ConnectionOptions } from 'mongoose'
import bodyParser from 'body-parser'

import Console from '../util/logger'
import variaveis from '../config/variaveis'

import { cid, medicamentos, condicao, alimentos } from './../Scripts/scripts'

// Rotas
import paciente from '../routes/paciente.routes'
import loginRoutes from '../routes/login.routes'
import atendimentoRoutes from '../routes/atendimento.routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.database()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(cors())
      this.express.use(bodyParser.urlencoded({ extended: true }))
      this.express.use(express.json())
    }

    private database (): void {
      const options: ConnectionOptions = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }

      connect(variaveis.banco, options)
        .then(async (): Promise<void> => {
          Console.log('[mongoose] Conectado')
          await alimentos()
            .then((): Promise<void> => condicao())
            .then((): Promise<void> => cid())
            .then((): Promise<void> => medicamentos())
            .catch((err): void => {
              console.log(err)
            })
        })
        .catch((erro): void => {
          Console.error(`Erro: ${erro}`)
        })
    }

    private routes (): void {
      this.express.use('/login', loginRoutes)
      this.express.use('/paciente', paciente)
      this.express.use('/atendimento', atendimentoRoutes)
    }
}

export default new App().express
