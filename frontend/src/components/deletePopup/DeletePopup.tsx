import {FC} from 'react'
import './deletePopup.css'
import GameService from '../../utils/service/GameService'



interface Props {
    title: string
    id: string
    cancelDelete: () => void
    closeGameView: () => void
    searchGames: () => void
}


const DeletePopup:FC<Props> = ({title, cancelDelete, id, closeGameView, searchGames}) => {

  
    

    const deleteGame = (_id: string) => {
            
            GameService.deleteGame(_id)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))

            cancelDelete()
           
          
        
           
    }



  return (
    <div className='popup'>
        <p className='delete-text'>Delete {title}?</p>
        <section className='buttons'>
            <button onClick={() => cancelDelete()} id="cancel" className='nes-btn'>Cancel</button>
            <button onClick={() => deleteGame(id)} id="confirm" className='nes-btn'>Confirm</button>
        </section>
    </div>
  )
}

export default DeletePopup