require('dotenv').config()

const desktop = require('./server')
const server = desktop.server
const app = desktop.app
const port = process.env.PORT || 4000

app.prepare().then(() => {
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`running on http://localhost:${port}`)
  })
})
