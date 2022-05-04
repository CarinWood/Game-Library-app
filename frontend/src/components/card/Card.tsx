import {FC, useState} from 'react'
import { ReadGame } from '../../utils/interface/Games'
import './card.css'
import DeletePopup from '../deletePopup/DeletePopup';

interface Props {
    game: ReadGame
    closeGameView: () => void
    
}





const Card:FC<Props> = ({game, closeGameView}) => {

    const [showPopup, setShowPopup] = useState(false)

    const PopupWindow = () => {
        setShowPopup(true)
    }

    const cancelDelete = () => {
        setShowPopup(false)
    }


    return (
        <div className='card-div'>
            <p className='game-title'>{game.title}</p>
            <p className='game-system'>System: {game.system}</p>
            <p className='game-release'>Release year: {game.release_yr}</p>
            <p className='game-genre'>Genre: {game.genre}</p>
            <button onClick={() => PopupWindow()} className='del-game-btn'>Delete</button>
            <button className="edit-btn">Edit</button>
            <p className='divider'>--------------------------------------------</p>
            { showPopup && <DeletePopup closeGameView={closeGameView} id={game._id} title={game.title} cancelDelete={cancelDelete}/>}
        </div>
    )
}


export default Card