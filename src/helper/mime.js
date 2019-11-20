const path = require('path')
const mime = {
  'txt': 'text/plain',
  'html': 'text/html',
  'css': 'text/css',
  'xml': 'text/xml',
  'gif': 'image/gif',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'js': 'application/javascript',
  'png': 'image/png',
  'mp3': 'audio/mpeg',
  'json': 'application/json'
}

module.exports = (filePath) => {
  let ext = path.extname(filePath)
  .split('.')
  .pop()
  .toLowerCase()

  if (!ext) {
    ext = filePath
  }

  return mime[ext] || mime['txt']
}