const variables = {
  api: {
    port: process.env.PORT || 3001
  },
  banco: process.env.connection || 'mongodb://localhost/tcc-dani',
  seguranca: {
    secretKey: 'eusoqueromeformarlogo'
  }
}

export default variables
