const { readFileSync } = require('fs')
const { createServer } = require('http')

const { PORT } = process.env

const index = readFileSync('index.html')

createServer()
  .on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200)
    res.end(index)
  })
  .on('upgrade', (req, socket) => socket.destroy())
  .listen(PORT, () => console.log('Ξ Launching @NOTFOUND'))
