import {FC, useState} from 'react'
import './search.css'
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri"

const Search:FC = () => {

const [openMenu, setOpenMenu] = useState(false)


const openAdvancedMenu = (): void => {
    setOpenMenu(!openMenu)
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
          <div>
          <p>System:</p>
        <select className='system-options'>
            <option value="" disabled selected hidden>System...</option>
            <option value="0">Nes</option>
            <option value="1">Snes</option>
            <option value="2">Game Boy</option>
            <option value="3">Game Boy Color</option>
            <option value="4">Game Boy Advance</option>
            <option value="5">Playstation</option>
        </select>
        </div>
        }
</div>
      

    </div>
  )
}

export default Search