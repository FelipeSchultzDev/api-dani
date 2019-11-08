import app from './config/app'
import variaveis from './config/variaveis'
import Console from './util/logger'

app.listen(variaveis.api.port, async (): Promise<void> => {
  Console.custom('[API] Rodando', Console.color.cyan)
  Console.custom(`[API] Porta: ${variaveis.api.port}`, Console.color.cyan)
})
// server.timeout = 30000
