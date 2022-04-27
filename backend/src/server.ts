import express from 'express'
import Configuration from './configurations/Configuration'
import Middleware from './middlewares/Middleware'
import AliveRoutes from './routes/AliveRoutes'
import GameRoutes from './routes/GameRoutes'

import Logger from './utils/Logger'

const server = express()
Middleware.applyMiddlewares(server)

AliveRoutes(server)
GameRoutes(server)



Middleware.errorHandlerAndNotFound(server)


Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
	Logger.debug('--== lolz ==--')
})

export default server