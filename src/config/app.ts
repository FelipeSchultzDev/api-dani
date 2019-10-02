import express from 'express'
import cors from 'cors'
import { connect, ConnectionOptions } from 'mongoose'
import bodyParser from 'body-parser'

import Console from '../util/logger'
import variaveis from '../config/variaveis'

import { cid, medicamentos, especialidade, condicao, alimentos } from './../Scripts/scripts'

// import jwt from './../security/autenticacao'

// Rotas
import paciente from '../routes/paciente.routes'
import loginRoutes from '../routes/login.routes'

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
        .then((): void => {
          Console.log('[mongoose] Conectado')
          cid()
          medicamentos()
          especialidade()
          condicao()
          alimentos()
        })
        .catch((erro): void => {
          Console.error(`Erro: ${erro}`)
        })
    }

    private routes (): void {
      this.express.use('/login', loginRoutes)
      this.express.use('/', paciente)
      // this.express.use('/', jwt, paciente)
    }
}

export default new App().express
