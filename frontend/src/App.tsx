import React, {useState, FC} from 'react';
import './App.css';
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

  const openSearch = () => {
    setShowSearch(true)
    setShowCredits(false)
    setShowMario(false)
   
  }

  const openCredits = () => {
      setShowCredits(true)
      setShowSearch(false)
      setShowMario(false)
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
        <Aside openSearch={openSearch} openCredits={openCredits} />

        {showCredits === true ? <Credits pressOk={pressOk}/>: ''}
    

      

           
    </div>
  );
}

export default App;
