const variables = {
  api: {
    port: process.env.PORT || 3001
  },
  banco: process.env.connection || 'mongodb://localhost/tcc-dani',
  // banco: process.env.connection || 'mongodb+srv://admin:0000@cluster0-d69u7.mongodb.net/dani?retryWrites=true&w=majority',
  seguranca: {
    secretKey: 'eusoqueromeformarlogo'
  }
}

export default variables
