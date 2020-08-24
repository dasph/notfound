const { readFileSync } = require('fs')
const { createServer } = require('http')

const { PORT } = process.env

const index = readFileSync('index.html')

createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200)
  res.end(index)
}).listen(PORT, () => console.log('Ξ Launching @NOTFOUND'))
