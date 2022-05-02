import http from '../MyApi'
import { CreateGame, ReadGame } from '../interface/Games'


const GameService = {
    getAll: () => {
		return http.get('/game')
	},

	createGame: (game: CreateGame) => {
		return http.post('/game', game)
	},

	deleteGame: (id: string) => {
		return http.delete(`/game/delete/${id}`)
	}

}


export default GameService

