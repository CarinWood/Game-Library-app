import {FC} from 'react'
import './aside.css'

interface Props {
    openSearch: () => void
    openCredits: () => void
}

const Aside:FC<Props> = ({openSearch, openCredits}) => {



    return (
        <div className='aside-container'>
                <button 
                        onClick={() => openSearch()}
                        className='nes-btn search-game-btn'>
                        Search Game
                </button>

                <button 
                    className='nes-btn add-game-btn'>
                    Add New Game
                </button>

                <button 
                    className='nes-btn play-tetris-btn'>
                    Play Tetris
                </button>
                
                <button 
                     onClick={() => openCredits()}
                    className='nes-btn credits-btn'>
                    Credits
                </button>
        </div>
    )
}


export default Aside