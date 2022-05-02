import {FC} from 'react'
import './dialog.css'

interface Props {
  message: string
  closeDialog: () => void
}

const Dialog:FC<Props> = ({message, closeDialog}) => {
  return (
    <div className='dialog-window'>
        <p className='text-message'><span>{message}</span><br/> was added to your library!</p>
        <button onClick={closeDialog} id="button" className='nes-btn'>OK</button>
    </div>
  )
}

export default Dialog