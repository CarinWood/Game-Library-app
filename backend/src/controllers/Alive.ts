import { Request, Response } from 'express'

const AliveController = (req: Request, res: Response) => {
    res.status(200).send('Connected to API')
}

export default {alive: AliveController}