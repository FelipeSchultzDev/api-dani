import express from 'express'
import cors from 'cors'
import { connect, ConnectionOptions } from 'mongoose'
import bodyParser from 'body-parser'

import ColorCMD from '../util/ColorCMD'
import variaveis from '../config/variaveis'

// import jwt from './../middlewares/authentication'

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
          ColorCMD('blue', '', '[mongoose] Conectado')
        })
        .catch((erro): void => {
          ColorCMD('red', '', `Erro: ${erro}`)
        })
    }

    private routes (): void {
      this.express.use('/login', loginRoutes)
      this.express.use('/', paciente)
      // this.express.use('/', jwt, paciente)
    }
}

export default new App().express
