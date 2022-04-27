import http from '../MyApi'
import { CreateGame, ReadGame } from '../interface/Games'

const GameService = {
    getAll: () => {
		return http.get('/game')
	},

}


export default GameService

