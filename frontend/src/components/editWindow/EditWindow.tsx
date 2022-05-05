import {FC, useState} from 'react'
import './editWindow.css'

interface Props {
    closeEditWindow: () => void
    updateGame: (_title:string) => void
   
}

const EditWindow:FC<Props> = ({closeEditWindow, updateGame}) => {

    const [newTitle, setNewTitle] = useState('')

    const newTitleFunc = (value: string) => {
            setNewTitle(value)
    }



  return (
    <div className='edit-window'>
        <h1 className='edit-game-heading'>Edit game</h1>
        <div className='edit-title-div'>
             <p className='edit-title'>Title:</p>
        <input
            className='edit-title-input'
            onChange={e => newTitleFunc(e.target.value)}
        />
        </div>
     
        
        <div className='edit-btn-div'>
        <button onClick={()=> closeEditWindow()} className='cancel-edit-btn'>Cancel</button>
        <button className='done-edit-btn' onClick={() => updateGame(newTitle)}>OK</button>
        </div>

    </div>
  )
}

export default EditWindow