import React from 'react';
import './App.css';
import tetris from './assets/images/greenTetris.png'
import Aside from './components/aside/Aside';
import {Nes} from './components/Nes'
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
        <header className='header-div'>
        <h1 className='headline'>My Video Game Library</h1>
        <i className="snes-logo"></i>
       
        </header>

     

        <Search/>
        <Aside/>

      

           
    </div>
  );
}

export default App;
