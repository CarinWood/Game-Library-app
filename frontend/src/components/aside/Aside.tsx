import {FC} from 'react'
import './aside.css'

const Aside:FC = () => {
    return (
        <div className='aside-container'>
                <button className='nes-btn search-game-btn'>Search Game</button>
                <button className='nes-btn add-game-btn'>Add New Game</button>
                <button className='nes-btn play-tetris-btn'>Play Tetris</button>
                <button className='nes-btn credits-btn'>Credits</button>
        </div>
    )
}


export default Aside