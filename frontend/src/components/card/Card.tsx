import {FC} from 'react'
import { ReadGame } from '../../utils/interface/Games'
import './card.css'

interface Props {
    game: ReadGame
}


const Card:FC<Props> = ({game}) => {
    return (
        <>
            <p className='game-title'>{game.title}</p>
            <p className='game-system'>System: {game.system}</p>
            <p className='game-release'>Release year: {game.release_yr}</p>
            <p className='game-genre'>Genre: {game.genre}</p>
            <p className='divider'>---------------------------------------</p>
        </>
    )
}


export default Card