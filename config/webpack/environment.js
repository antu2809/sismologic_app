const { environment } = require('@rails/webpacker')

environment.config.node = {
  global: false,
  __dirname: false,
  __filename: false,
}

module.exports = environment