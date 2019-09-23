const variables = {
  Api: {
    port: process.env.port || 3001
  },
  banco: process.env.connection || 'mongodb://localhost/tcc-dani',
  seguranca: {
    secretKey: 'eusoqueromeformarlogo'
  }
}

export default variables
