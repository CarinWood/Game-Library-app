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

	searchGame:  async (_game: object) => {
		console.log("game", _game)
		const data = await http.post('/game/search', _game)
		console.log("data", data)
		return data 
	},
	searchTitle: (title: object) => {
		return http.post('/game/title', title)
	},

	searchSystem: (system: object) => {
		return http.post('/game/system', system)
	},
	
	searchGenre: (genre: object) => {
		return http.post('/game/genre', genre)
	}

}


export default GameService

