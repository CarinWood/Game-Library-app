import {FC, useState} from 'react'
import './addGame.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import GameService from '../../utils/service/GameService'
import { CreateGame } from '../../utils/interface/Games';
import Dialog from '../dialogWindow/Dialog';


interface Props {
    clickAddGame: () => void

}


const AddGame:FC<Props> = ({clickAddGame}) => {

        const [year, setYear] =useState(1987)
        const [title, setTitle] =useState('')
        const [system, setSystem] =useState('')
        const [genre, setGenre] =useState('')
        const [message, setMessage] =useState('')
        const [openDialog, setOpenDialog] =useState(false)

    const incYear = ():void => {
        setYear(year + 1)
    }

    const decYear = ():void => {
        setYear(year - 1)
    }

    const titlefunc = (_value:string) => {
        setTitle(_value)
    }

    const systemSelect = (selectValue: string) => {
        setSystem(selectValue)
    }
    const selectGenre = (genreValue: string) => {
        setGenre(genreValue)
    }

    const addGame = () => {
        
        const game: CreateGame = {
            'title': title,
            'system': system,
            'release_yr': year,
            'genre': genre
        }


       GameService.createGame(game)
       .then(response => {
           setMessage(response.data.title)
       })
       .catch(error => console.log(error))

       setOpenDialog(true)
    
    
    }

    const closeDialog = () => {
        setOpenDialog(false)
    }

   


  return (
    <div className='add-game-container'>
        <p className='add-game-headline'>Add new game:</p> 
        
        <article className='title-article'>
            <p className='new-game-title'>Title:</p>
            <input
                className='title-input'
                onChange={(e) => titlefunc(e.target.value)}
               
            />
        </article>
      
        <article className='year-article'>
                <p className='new-game-release'>Year:</p>
                <input

                className='year-div'
                value={year}
                maxLength={4}
                type="text"
                onChange={e => setYear(Number(e.target.value))}
                  
                />
                    
                     
                    <MdKeyboardArrowUp onClick={() => incYear()} className='arrow-up'/>
                    <MdKeyboardArrowDown onClick={() => decYear()} className='arrow-down'/>
                  
            </article>

       
            <article className='system-article'>
                <p className='new-game-system'>System:</p>
                <select className='system-select' onChange={e => systemSelect(e.target.value)}>
                    <option value={'NES'}>NES</option>
                    <option value={'SNES'}>SNES</option>
                    <option value={'Sega'}>Sega</option>
                    <option value={'Gameboy'}>Gameboy</option>
                </select>
            </article>
       
            <article className='genre-article'>
                <p className='new-game-genre'>Genre:</p>
                <select className='genre-select' onChange={e => selectGenre(e.target.value)}>
                    <option value={'Action'}>Action</option>
                    <option value={'Platform'}>Platform</option>
                    <option value={'RPG'}>RPG</option>
                    <option value={'Puzzle'}>Puzzle</option>
                    <option value={'Racing'}>Racing</option>
                    <option value={'Shooter'}>Shooter</option>
                </select>
            </article>
       


       
           
        

       
      
        <div className='button-area'>
        <button onClick={() => clickAddGame()} id="cancel-btn" className='nes-btn'>Cancel</button>
        <button onClick={()=> addGame()} id="add-btn" className='nes-btn'>Add game</button>
        </div>
        {openDialog && <Dialog message={message} closeDialog={closeDialog}/>}
    </div>
  )
}

export default AddGame