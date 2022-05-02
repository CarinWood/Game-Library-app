import React, {useState, FC} from 'react';
import './App.css';
import AddGame from './components/addGame/AddGame';
import Aside from './components/aside/Aside';
import Credits from './components/credits/Credits';
import Placeholder from './components/placeholder/Placeholder';
import Search from './components/search/Search';

interface Props {
  
}

const App:FC =() => {
  const [showSearch, setShowSearch] = useState(false)
  const [showCredits, setShowCredits] = useState(false)
  const [showMario, setShowMario] = useState(false)
  const [openAddGame, setOpenAddGame] = useState(false)

  const openSearch = () => {
    setShowSearch(!showSearch)
    setShowCredits(false)
    setShowMario(false)
    setOpenAddGame(false)
   
  }

  const clickAddGame = () => {
    setOpenAddGame(!openAddGame)
    setShowCredits(false)
    setShowMario(false)
    setShowSearch(false)
}

  const openCredits = () => {
      setShowCredits(true)
      setShowSearch(false)
      setShowMario(false)
      setOpenAddGame(false)
  }

  const pressOk = () => {
    setShowCredits(false)
    setShowMario(true)
  }


  return (
    <div className="App">
        <header className='header-div'>
        <h1 className='headline'>My Video Game Library</h1>
        <i className="snes-logo"></i>
       
        </header>

        {showMario === true ? <Placeholder/> : ''}

        {showSearch === true ? <Search/>: ''}
        <Aside openSearch={openSearch} openCredits={openCredits} clickAddGame={clickAddGame} />

        {showCredits === true ? <Credits pressOk={pressOk}/>: ''}
        {openAddGame && <AddGame clickAddGame={clickAddGame}/>}
    

      

           
    </div>
  );
}

export default App;
