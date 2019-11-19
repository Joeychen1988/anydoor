const http = require('http')
const chalk = require('chalk')

const hostname = 'localhost'
const port = 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Hello World\n`)
})

server.listen(port, hostname, () => {
  let addr = `http://${hostname}:${port}`
  console.log(`Server running at ${chalk.green(addr)}`)
})