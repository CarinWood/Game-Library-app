import {FC, useState} from 'react'
import './search.css'
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs";

const Search:FC = () => {

const [openMenu, setOpenMenu] = useState(false)
const [nesIsChecked, setNesIsChecked] = useState(false)
const [snesIsChecked, setSnesIsChecked] = useState(false)
const [segaIsChecked, setSegaIsChecked] = useState(false)
const [gbIsChecked, setGbIsChecked] = useState(false)
const [genre, setGenre] = useState('')


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

const clickGenre = (genre: string) => {
    if (genre === 'action') {
      setGenre('action')
    } else if (genre === 'platformer') {
      alert('platformer')
    } else if (genre === 'rpg') {
      alert('rpg')
    } else if (genre === 'puzzle') {
      alert('puzzle')
    } else if (genre === 'brawler') {
      alert('brawler')
    } else {
      alert('shooter')
    }

}

  return (
    <div className='search-container'>
        <div className='search-div'>
        
        <div className="nes-field">
         <input 
         type="text" 
         className="search-input"
         placeholder='Game title ...'
         />
         <button className="search-btn">Search</button>
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
            <form  onClick={()=>clickNes()}  className='checkbox-form'>
                <div className='square'>{nesIsChecked && <BsCheck className='checkmark'/>}</div>
                <p className='label'>NES</p>
            </form>
            <form onClick={() =>clickSnes()}className='checkbox-form'>
                <div className='square'>{snesIsChecked && <BsCheck className='snesmark'/>}</div>
                <p className='label'>SNES</p>
            </form>
            <form onClick={() => clickSega()} className='checkbox-form'>
                <div className='square'>{segaIsChecked && <BsCheck className='segamark'/>}</div>
                <p className='label'>SEGA</p>
            </form>
            <form onClick={() =>clickGB()} className='checkbox-form'>
                <div className='square'>{gbIsChecked && <BsCheck className="gbmark"/>}</div>
                <p className='label'>GAMEBOY</p>
            </form>
            </div>
            
          <div className="genre-choices">
            <p className='genre'>Genre:</p>
            <form  onClick={()=>clickGenre('action')}  className='genre-form'>
                <div className='box'>{genre === 'action' && <BsCheck className='action-check'/>}</div>
                <p className='label'>Action</p>
            </form>
            <form onClick={() =>clickGenre('platformer')}className='genre-form'>
                <div className='box'>{snesIsChecked && <BsCheck className='snesmark'/>}</div>
                <p className='label'>Platform</p>
            </form>
            <form onClick={() => clickGenre('rpg')} className='genre-form'>
                <div className='box'>{segaIsChecked && <BsCheck className='segamark'/>}</div>
                <p className='label'>RPG</p>
            </form>
            <form onClick={() =>clickGenre('puzzle')} className='genre-form'>
                <div className='box'>{gbIsChecked && <BsCheck className="gbmark"/>}</div>
                <p className='label'>Puzzle</p>
            </form>
            <form onClick={() =>clickGenre('brawler')} className='genre-form'>
                <div className='box'>{gbIsChecked && <BsCheck className="gbmark"/>}</div>
                <p className='label'>Brawler</p>
            </form>
            <form onClick={() =>clickGenre('shooter')} className='genre-form'>
                <div className='box'>{gbIsChecked && <BsCheck className="gbmark"/>}</div>
                <p className='label'>Shooter</p>
            </form>
         

          </div>
          </section>
        }
</div>
      

    </div>
  )
}

export default Search