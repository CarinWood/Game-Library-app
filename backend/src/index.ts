import express, {Request, Response} from 'express'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hello')
})

app.listen(port, () => {
    console.log('SERVER IS RUNNING ON PORT: ' + port)
})