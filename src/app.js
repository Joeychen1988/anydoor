const http = require('http')
const path = require('path')
const chalk = require('chalk')
const route = require('./helper/route')
const { hostname, port, root } = require('./config/defaultConfig')

const server = http.createServer((req, res) => {
  const filePath = path.join(root, req.url)
  route(req, res, filePath)
})

server.listen(port, hostname, () => {
  let addr = `http://${hostname}:${port}`
  console.log(`Server running at ${chalk.green(addr)}`)
})