import {FC, useState} from 'react'
import './search.css'
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs";
import Gameview from '../gameview/Gameview';
import GameService from '../../utils/service/GameService';
import { CreateGame, ReadGame, SearchGame } from '../../utils/interface/Games';
import { setEnvironmentData } from 'worker_threads';
import { MdRadioButtonUnchecked } from 'react-icons/md';

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

const titleFunc = (_title: string) => {
  const trimmedTitle = _title.trim()

  setTitle(trimmedTitle)
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
      if (system === 'NES') {
        setSystem('')
      } else {
        setSystem('NES')
      }
 
    } else if (_system === 'SNES') {
        if (system === 'SNES') {
          setSystem('')
        } else {
           setSystem('SNES')
        }
      
   
    } else if (_system === 'Sega') {
       if (system === 'Sega') {
         setSystem('')
       } else {
         setSystem('Sega')
       }
       
   
    } else {
      if (system === 'Gameboy') {
        setSystem('')
      } else {
        setSystem('Gameboy')
      }
      
  
    }
}

const clickGenre = (_genre: string) => {
    if (_genre === 'action') {
      if (genre === 'Action') {
        setGenre('')
      } else {
        setGenre('Action')
      }
     
    } else if (_genre === 'Platform') {
      if (genre === 'Platform') {
        setGenre('')
      } else {
        setGenre('Platform')
      }
   
    } else if (_genre === 'RPG') {
      if (genre === 'RPG') {
        setGenre('')
      } else {
        setGenre('RPG')
      }
     
    } else if (_genre === 'puzzle') {
      if(genre === 'Puzzle') {
        setGenre('')
      } else {
        setGenre('Puzzle')
      }
      
    } else if (_genre === 'racing') {
      if(genre === 'Racing') {
          setGenre('')
      } else {
         setGenre('Racing')
      }
     
    } else {
      if(genre === 'Shooter') {
        setGenre('')
      } else {
        setGenre('Shooter')
      }

    }

}


const searchGames = () => {
  
  if (title === ''&& system === '' && genre === '') {
      GameService.getAll()
      .then(response => {
        setGames(response.data)
        setShowGameview(true)
      })
      .catch(error => console.log(error))

  } else if (system === '' && genre === '') {
      const _title = {
        "title": title
      }

    GameService.searchTitle(_title)
    .then(response =>{
      setGames(response.data)
      setShowGameview(true)
    })
    .catch(error => console.log(error))

  } else if (title === '' && genre === '') {
     const _system = {
      "system": system
    }
    GameService.searchSystem(_system)
    .then(response => {
      setGames(response.data)
      setShowGameview(true)
    })
    .catch(error => console.log(error))

  } else if (title === '' && system === '') {
      const _genre = {
        "genre": genre
      }

      GameService.searchGenre(_genre)
      .then(response => {
        setGames(response.data)
        setShowGameview(true)
      })
      .catch(error =>console.log(error))

  } else {
       const _game: object = {
     "title": title,
     "system": system,
     "genre": genre
   }


   console.log(_game)

  GameService.searchGame(_game)
  .then(response => {
   
    setGames(response.data)
    setShowGameview(true)
    setGenre('')
    setSystem('')
    setTitle('')
  })
  .catch(error => {
    console.log(error)})
  }

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
         onChange={e => titleFunc(e.target.value)}
         />
         <button onClick={()=> searchGames()} className="search-btn">Search</button>
        </div>

      

        </div>
        <button 
            onClick={()=>openAdvancedMenu()}
            className="advanced-btn">
              Advanced Search 
            {openMenu === false ? <RiArrowDropRightFill className='arrow'/> : <RiArrowDropDownFill className='arrow'/>}
        </button>

        <div>
          {openMenu=== true &&
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
                <div className='box'>{genre === 'Action' && <BsCheck className='action-check'/>}</div>
                <p className='label'>Action</p>
            </form>
            <form onClick={() =>clickGenre('Platform')}className='genre-form'>
                <div className='box'>{genre === 'Platform' && <BsCheck className='platform-check'/>}</div>
                <p className='label'>Platform</p>
            </form>
            <form onClick={() => clickGenre('RPG')} className='genre-form'>
                <div className='box'>{genre === 'RPG' && <BsCheck className='rpg-check'/>}</div>
                <p className='label'>RPG</p>
            </form>
            <form onClick={() =>clickGenre('puzzle')} className='genre-form'>
                <div className='box'>{genre === 'Puzzle' && <BsCheck className="puzzle-check"/>}</div>
                <p className='label'>Puzzle</p>
            </form>
            <form onClick={() =>clickGenre('racing')} className='genre-form'>
                <div className='box'>{genre === 'Racing' && <BsCheck className="brawler-check"/>}</div>
                <p className='label'>Racing</p>
            </form>
            <form onClick={() =>clickGenre('shooter')} className='genre-form'>
                <div className='box'>{genre === 'Shooter' && <BsCheck className="shooter-check"/>}</div>
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