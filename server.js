require('dotenv').config()
const compression = require('compression')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const quiet = !dev

const nextjsApp = next({ dev, dir: '.', quiet })
const nextjsAppHandler = nextjsApp.getRequestHandler()

const server = express()
server.use(compression())

server.get('/', (req, res) => {
    const queryParams = {token: req.query.token, url: req.query.url}
    nextjsApp.renderToHTML(req, res, '/checkout', queryParams)
      .then((html) => {
        res.send(html)
        return true
      })
      .catch((err) => {
        res.status(500)
        nextjsApp.renderError(err, req, res, '/checkout', queryParams)
      })
})

server.get('/*', (req, res) => {
  return nextjsAppHandler(req, res)
})

module.exports = {
  server,
  app: nextjsApp
}
