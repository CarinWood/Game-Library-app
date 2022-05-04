import { Express } from 'express'
import GameController from '../controllers/GameController'

const GameRoutes = (server: Express) => {
        //Create
        server.post('/game', GameController.createGame)

        //Read
        server.get('/game', GameController.showAllGames)

        server.post('/game/search', GameController.showSearchResult)
        
        server.post('/game/title', GameController.searchTitle)
        server.post('/game/system', GameController.searchSystem)

        //Delete
        server.delete('/game/delete/:id', GameController.deleteGame)
}


export default GameRoutes