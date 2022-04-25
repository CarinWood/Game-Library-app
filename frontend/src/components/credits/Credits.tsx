import {FC} from 'react'
import './credits.css'

interface Props {
    pressOk: () => void
}


const Credits:FC<Props> = ({pressOk}) => {
    
    return(
        <div className='credits nes-dialog is-dark is-rounded'>
            <h2 className='credit-text'>Created and Built by</h2> 
            <h2 className='credit-text'><span className='sign'>~~</span> Carin Wood <span className='sign'>~~</span></h2>
            <button onClick={() => pressOk()} className="nes-btn ok-btn">OK</button>
        </div>
    )
}


export default Credits