import { Express } from 'express'
import Alive from '../controllers/Alive'

const AliveRoutes = (server: Express) =>{
    server.get('/', Alive.alive)
}


export default AliveRoutes