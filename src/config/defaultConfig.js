module.exports = {
  root: process.cwd(),
  hostname: `localhost`,
  port: `3001`,
  compress: /\.(html|js|css|md)/,
  cache: {
    maxAge: 600, // 秒数
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
}