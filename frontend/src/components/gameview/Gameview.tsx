import './gameview.css'
import {FC} from 'react'
import { ReadGame } from '../../utils/interface/Games'
import Card from '../card/Card'
import { IoClose } from "react-icons/io5";





interface Props {
    games: Array<ReadGame>
    closeGameView: () => void
}

const Gameview:FC<Props> = ({games, closeGameView}) => {

       return (
        <div className='game-list'>
         
            <h2 className='result-headline'>Search Result:</h2>
          
            <div className='game-card'>
            { games.map(game => (
					<Card key={ game._id } game={ game } closeGameView={closeGameView} />
				)) }
            </div>
                <IoClose onClick={() =>closeGameView()} id="close-btn"/>
                
        </div> 
    )
}


export default Gameview