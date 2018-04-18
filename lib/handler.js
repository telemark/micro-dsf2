const { readFileSync } = require('fs')
const dsfLookup = require('node-dsf')
const { DSF_CONFIG } = require('../config')
const md = require('markdown-it')()
const { send, json } = require('micro')
const logger = require('./logger')

exports.getFrontpage = (request, response) => {
  logger('info', ['handlers', 'frontpage'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}

exports.dsfLookup = async (request, response) => {
  const { method } = request.params
  logger('info', ['method', method])
  const query = await json(request)
  const options = {
    method,
    config: DSF_CONFIG,
    query
  }
  try {
    const dsfData = await dsfLookup(options)
    logger('info', [method, 'response', 'success'])
    send(response, 200, dsfData)
  } catch (error) {
    logger('error', [method, JSON.stringify(error, null, 2)])
    send(response, 500, JSON.stringify(error, null, 2))
  }
}
