import {FC} from 'react'
import './nes.css'

export const Nes:FC = () => {
    return (
      <div className="nes">
        <main className="hello">hello</main>
        <div className="bye">goodbye</div>

        <div className="nes-container with-title">
          <p className="title">nes container</p>
          <p><button type="button" className='search-btn nes-btn is-primary'>Search</button></p>
          <p><button type="button" className='nes-btn is-success'>Add Game</button></p>
        </div>
      </div>
    );
}

