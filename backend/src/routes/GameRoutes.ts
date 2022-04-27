import { Express } from 'express'
import GameController from '../controllers/GameController'

const GameRoutes = (server: Express) => {
        //Create
        server.post('/game', GameController.createGame)

        //Read
        server.get('/game', GameController.showAllGames)

        //Delete
        server.delete('/game/delete/:id', GameController.deleteGame)
}


export default GameRoutes