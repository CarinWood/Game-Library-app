import http from '../MyApi'
import { CreateGame, SearchGame } from '../interface/Games'


const GameService = {
    getAll: () => {
		return http.get('/game')
	},

	createGame: (game: CreateGame) => {
		return http.post('/game', game)
	},

	deleteGame: (id: string) => {
		return http.delete(`/game/delete/${id}`)
	},

	searchGame: (_game: SearchGame) => {
		return http.get('/game/search', _game)
	},

}


export default GameService

