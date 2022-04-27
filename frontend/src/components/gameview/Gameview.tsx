import './gameview.css'
import {FC} from 'react'
import { ReadGame } from '../../utils/interface/Games'
import Card from '../card/Card'


interface Props {
    games: Array<ReadGame>
}

const Gameview:FC<Props> = ({games}) => {




    return (
        <div className='game-list'>
            <h2 className='result-headline'>Search Result:</h2>
            <div className='game-card'>
            { games.map(game => (
					<Card key={ game._id } game={ game }/>
				)) }
            </div>
          
        </div>
    )
}


export default Gameview