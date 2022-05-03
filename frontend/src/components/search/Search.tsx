import {FC, useState} from 'react'
import './search.css'
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs";
import Gameview from '../gameview/Gameview';
import GameService from '../../utils/service/GameService';
import { CreateGame, ReadGame, SearchGame } from '../../utils/interface/Games';

const Search:FC = () => {

const [openMenu, setOpenMenu] = useState(false)
const [nesIsChecked, setNesIsChecked] = useState(false)
const [snesIsChecked, setSnesIsChecked] = useState(false)
const [segaIsChecked, setSegaIsChecked] = useState(false)
const [gbIsChecked, setGbIsChecked] = useState(false)
const [showGameview, setShowGameview] = useState(false)
const [genre, setGenre] = useState('')
const [title, setTitle] = useState('')
const [system, setSystem] = useState('')
const [games, setGames] = useState<Array<ReadGame>>([])


const openAdvancedMenu = (): void => {
    setOpenMenu(!openMenu)
}

const clickNes = () => {
  setNesIsChecked(!nesIsChecked)
  setSnesIsChecked(false)
  setSegaIsChecked(false)
  setGbIsChecked(false)
  
}
const clickSnes = () => {
  setSnesIsChecked(!snesIsChecked)
  setNesIsChecked(false)
  setSegaIsChecked(false)
  setGbIsChecked(false)
}

const clickSega =() => {
  setSegaIsChecked(!segaIsChecked)
  setNesIsChecked(false)
  setSnesIsChecked(false)
  setGbIsChecked(false)
}

const clickGB =() => {
  setGbIsChecked(!gbIsChecked)
  setSegaIsChecked(false)
  setNesIsChecked(false)
  setSnesIsChecked(false)
}

const clickSystem = (_system: string) => {
    if (_system === 'NES') {
      setSystem('NES')
     
    } else if (_system === 'SNES') {
      setSystem('SNES')
   
    } else if (_system === 'Sega') {
      setSystem('Sega') 
   
    } else {
      setSystem('Gameboy')
  
    }
}

const clickGenre = (_genre: string) => {
    if (_genre === 'action') {
      setGenre('action')
    } else if (_genre === 'platform') {
      setGenre('platform')
    } else if (_genre === 'RPG') {
      setGenre('RPG')
    } else if (_genre === 'puzzle') {
      setGenre('puzzle')
    } else if (_genre === 'brawler') {
      setGenre('brawler')
    } else {
      setGenre('shooter')
    }

}


const searchGames = () => {
  const _game = {
    "title": title,
    "system": system,
    "genre": genre
  }


  console.log(_game)

 GameService.searchGame(_game)
 .then(response => {
   console.log(response.data)
 })
 .catch(error => console.log(error))

}

const closeGameView = () => {
  setShowGameview(false)
}

  return (
    <div className='search-container'>
        <div className='search-div'>
        
        <div className="nes-field">
         <input 
         type="text" 
         className="search-input"
         placeholder='Game title ...'
         value={title}
         onChange={e => setTitle(e.target.value)}
         />
         <button onClick={()=> searchGames()} className="search-btn">Search</button>
        </div>

      

        </div>
        <button 
            onClick={()=>openAdvancedMenu()}
            className="advanced-btn">
              Advanced Search 
            {openMenu ? <RiArrowDropRightFill className='arrow'/> : <RiArrowDropDownFill className='arrow'/>}
        </button>

        <div>
          {openMenu=== false &&
          <section>
          <div className="system-choices">
            <p className='system'>System:</p>
            <form  onClick={()=>clickSystem('NES')}  className='checkbox-form'>
                <div className='square'>{system === 'NES' && <BsCheck className='checkmark'/>}</div>
                <p className='label'>NES</p>
            </form>
            <form onClick={() =>clickSystem('SNES')}className='checkbox-form'>
                <div className='square'>{system === 'SNES' && <BsCheck className='snesmark'/>}</div>
                <p className='label'>SNES</p>
            </form>
            <form onClick={() => clickSystem('Sega')} className='checkbox-form'>
                <div className='square'>{system === 'Sega' && <BsCheck className='segamark'/>}</div>
                <p className='label'>SEGA</p>
            </form>
            <form onClick={() =>clickSystem('Gameboy')} className='checkbox-form'>
                <div className='square'>{system === 'Gameboy' && <BsCheck className="gbmark"/>}</div>
                <p className='label'>GAMEBOY</p>
            </form>
            </div>
            
          <div className="genre-choices">
            <p className='genre'>Genre:</p>
            <form  onClick={()=>clickGenre('action')}  className='genre-form'>
                <div className='box'>{genre === 'action' && <BsCheck className='action-check'/>}</div>
                <p className='label'>Action</p>
            </form>
            <form onClick={() =>clickGenre('platform')}className='genre-form'>
                <div className='box'>{genre === 'platform' && <BsCheck className='platform-check'/>}</div>
                <p className='label'>Platform</p>
            </form>
            <form onClick={() => clickGenre('RPG')} className='genre-form'>
                <div className='box'>{genre === 'RPG' && <BsCheck className='rpg-check'/>}</div>
                <p className='label'>RPG</p>
            </form>
            <form onClick={() =>clickGenre('puzzle')} className='genre-form'>
                <div className='box'>{genre === 'puzzle' && <BsCheck className="puzzle-check"/>}</div>
                <p className='label'>Puzzle</p>
            </form>
            <form onClick={() =>clickGenre('brawler')} className='genre-form'>
                <div className='box'>{genre === 'brawler' && <BsCheck className="brawler-check"/>}</div>
                <p className='label'>Brawler</p>
            </form>
            <form onClick={() =>clickGenre('shooter')} className='genre-form'>
                <div className='box'>{genre === 'shooter' && <BsCheck className="shooter-check"/>}</div>
                <p className='label'>Shooter</p>
            </form>
         

          </div>
          </section>
        }
</div>
      {showGameview && <Gameview games={games} closeGameView={closeGameView}/>}

    </div>
  )
}

export default Search