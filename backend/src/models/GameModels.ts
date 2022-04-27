import dotenv from 'dotenv'
import { model, Schema } from 'mongoose'
import {CreateGame} from '../utils/interface/IGame'


dotenv.config()

const dbCollection = process.env.MONGODB_COLLECTION_GAMES

const GameSchema = new Schema<CreateGame>({
    title: {
        type: String,
        required: true
    },
    system: {
        type: String,
        required: true
    },
    release_yr: {
    type: Number,
    required: true
    },
    genre: {
        type: String,
        required: true
    }

})


const GameModel = model<CreateGame>(dbCollection, GameSchema)

export default GameModel