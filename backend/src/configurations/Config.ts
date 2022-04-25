import dotenv from 'dotenv'
import {Express} from 'express'
import mongoose, { connect } from 'mongoose'

dotenv.config()

const PORT = process.env.PORT
const env = process.env.NODE_ENV

let uri: string

if (env === 'development') {
	uri = process.env.MONGODB_URL + process.env.MONGODB_DB_NAME
} else {
	uri = process.env.MONGODB_URI
}

const connectToDatabase = async () => {
        try {
            const DB_URL = process.env.DATABASE_URL
            await  mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            console.log('SUCCESSFULLY CONNECTED TO THE DATABASE')
        }
        catch {
            console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE', error)
            process.exit()
        }
}




export default {
    connectToDatabase,

}