const { readFileSync } = require('fs')
const { createServer } = require('http')
const { brotliCompressSync } = require('zlib')

const { PORT } = process.env

const index = brotliCompressSync(readFileSync('index.html'))

createServer()
  .on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Encoding', 'br')
    res.writeHead(200)
    res.end(index)
  })
  .on('upgrade', (req, socket) => socket.destroy())
  .listen(PORT, () => console.log('Ξ Launching @NOTFOUND'))
