import Logger from '../utils/Logger'
import { Request, Response } from 'express'
import GameModel from '../models/GameModels'
import {CreateGame, ReadGame} from '../utils/interface/IGame'

const createGame = async (req: Request, res: Response) => {
    try {
            const {title, system, release_yr, genre} = req.body

            if(title && system && release_yr && genre) {
                const newGameObject: CreateGame = {
                    title: title,
                    system: system,
                    release_yr: Number(release_yr),
                    genre: genre
                }

                Logger.http(newGameObject)
                const game = new GameModel(newGameObject)
                const dbResponse = await game.save()
                res.status(201).send(dbResponse)
            }
    }
    catch (error) {
        Logger.error('title, system, release year or genre failed')
        res.status(400).send({
            message: 'Incorrect body'
        })
    }
}

const showSearchResult = async (req: Request, res: Response) => {
    console.log(req.body)
        try {
            GameModel.find({title:req.body.title, system:req.body.system, genre:req.body.genre}, '', (error: ErrorCallback, games: Array<ReadGame>) => {
                if (error) {
                    Logger.error(error)
                    res.status(400).send({
                        error: 'Error getting Games'
                    })
                } else {
                    Logger.http(games)
                    res.status(200).send(games)
                }
            })
        }
        catch(error) {
            Logger.error(error)
            res.status(400).send({
                error: 'Error getting games'
        })
}
}



const showAllGames = async (req: Request, res: Response) => {
        try {
            GameModel.find({}, '', (error: ErrorCallback, games: Array<ReadGame>) => {
                if (error) {
                    Logger.error(error)
                    res.status(400).send('Error getting Games')
                } else {
                    Logger.http(games)
                    res.status(200).send(games)
                }
            })
        }
        catch(error) {
            Logger.error(error)
		res.status(400).send({
			error: 'Error getting user'
		})
        }
}
const searchTitle = async (req: Request, res: Response) => {
        try {
            GameModel.find({title: req.body.title}, '', (error: ErrorCallback, games: Array<ReadGame>) => {
                if (error) {
                    Logger.error(error)
                    res.status(400).send('Error getting Games')
                } else {
                    Logger.http(games)
                    res.status(200).send(games)
                }
            })
        }
        catch(error) {
            Logger.error(error)
		res.status(400).send({
			error: 'Error getting user'
		})
        }
}









const deleteGame = async (req: Request, res: Response) => {
        try {
            GameModel.findByIdAndDelete(req.params.id, (error: ErrorCallback, game: ReadGame) => {
                if(error) {
                    Logger.error(error)
                    res.status(404).send('Error while trying to delete game')
                } else {
                    Logger.http(game)
                    res.status(200).send('Game deleted')
                }
            })

        }
        catch (error) {
            Logger.error(error)
            res.status(400).send({
                error: 'Error deleting user'
            })
        }
}


export default {
    createGame,
    deleteGame,
    showAllGames,
    showSearchResult,
    searchTitle
}

