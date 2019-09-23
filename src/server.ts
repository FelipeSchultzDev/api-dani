import app from './config/app'
import variaveis from './config/variaveis'
import ColorCMD from './util/ColorCMD'
// import autoCreateAcessos from './util/autoCreateAcessos'

const server = app.listen(variaveis.Api, async (): Promise<void> => {
  ColorCMD('purple', '', '[API] Rodando')
  ColorCMD('purple', '', `[API] Porta: ${variaveis.Api.port}`)
  // await autoCreateAcessos()
})
server.timeout = 30000
