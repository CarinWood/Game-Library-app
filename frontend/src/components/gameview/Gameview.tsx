import './gameview.css'
import {FC, useState, useEffect} from 'react'
import { ReadGame } from '../../utils/interface/Games'
import Card from '../card/Card'
import { IoClose } from "react-icons/io5";
import EditWindow from '../editWindow/EditWindow';
import GameService from '../../utils/service/GameService';


interface Props {
    games: Array<ReadGame>
    closeGameView: () => void
    searchGames: () => void
}




const Gameview:FC<Props> = ({games, closeGameView, searchGames}) => {

    const [editWindow, setEditWindow] = useState(false)
    const [currentId, setCurrentId] = useState('')

  
    

    const openEditWindow = (_id: string) => {
            setEditWindow(true)
            setCurrentId(_id)
    }
  
    const closeEditWindow = () => {
            setEditWindow(false)
    }

    const updateGame = (_updatedTitle: string) => {
       
        console.log(currentId)
        const _newTitle = {
            "title": _updatedTitle
        }

        console.log(_newTitle)

        GameService.updateGame(currentId, _newTitle)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))

        
        setEditWindow(false)
        closeGameView()
        searchGames()

     }

 
 

       return (
           <>
        <div className='game-list'>
         
            <h2 className='result-headline'>Search Result:</h2>
          
            <div className='game-card'>
            { games.map(game => (
					<Card key={ game._id } game={ game } closeGameView={closeGameView} openEditWindow={openEditWindow} searchGames={searchGames} />
				)) }
            </div>
                <IoClose onClick={() =>closeGameView()} id="close-btn"/>
                
        </div> 
        {editWindow && <EditWindow closeEditWindow={closeEditWindow} updateGame={updateGame} />}
        </>
    )
}


export default Gameview