module.exports = {
  COGNITO_APP_CLIENT_ID: process.env.COGNITO_APP_CLIENT_ID,
  COGNITO_APP_CLIENT_SECRET: process.env.COGNITO_APP_CLIENT_SECRET,
  COGNITO_APP_CLIENT_CALLBACK_URL: 'http://localhost:3000/callback',
  COGNITO_DOMAIN: process.env.COGNITO_DOMAIN,
  COGNITO_JWK: require('./jwt.json')
}
