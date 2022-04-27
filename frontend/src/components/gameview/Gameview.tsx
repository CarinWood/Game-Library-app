import './gameview.css'
import {FC} from 'react'
import { ReadGame } from '../../utils/interface/Games'

interface Props {
    data: Array<ReadGame>
}

const Gameview:FC<Props> = ({data}) => {




    return (
        <div className='game-list'>
            <h2 className='result-headline'>Search Result:</h2>
            <div className='game-card'>{data.map(game => (
                <>
                <h2 className='title'>Title: {game.title}</h2>
                <h2 className='title'>System: {game.system}</h2>
                <h2>Release Year: {game.release_yr}</h2>
                <h2>Genre: {game.genre}</h2>
                <p>------------------------------------------</p>
                </>
            ))}</div>
          
        </div>
    )
}


export default Gameview