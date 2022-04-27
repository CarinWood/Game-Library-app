import dotenv from 'dotenv'
import { model, Schema } from 'mongoose'




dotenv.config()

const dbCollection = process.env.MONGODB_COLLECTION_GAMES

const GameSchema = new Schema<CreateGame>({

})