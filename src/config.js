module.exports = {
  server: {
    host: 'localhost',
    port: process.env.PORT || 4000
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/graphql_auth'
  },
  auth: {
    secret: process.env.SECRET || 'super_secret_word', // CHANGE IT!
    expiresIn: 86400 // expires in 24 hours
  }
};
