const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')
const jwt = require('express-jwt')

// Utilities
const handler = require('./lib/handler')
const { JWT_SECRET } = require('./config')
const handleUnauthorized = require('./lib/handle-unauthorized')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

// JWT
router.use(jwt({secret: JWT_SECRET}).unless({method: ['GET']}))
router.use(handleUnauthorized)

// ROUTES
router.get('/', handler.getFrontpage)
router.post('/dsf/:method', handler.dsfLookup)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
