import './app.css'
import{useCatImage} from './hooks/useCatImage.js'
import {useCatFact} from './hooks/useCatFact.js'

const CAT_REFIX_IMAGE_URL='https://cataas.com'

export function App (){
    const {fact, refreshFact} = useCatFact()
    const {imgUrl} = useCatImage({fact})

    const handleClick = async()=>{
        refreshFact()
    }
    
    return(
        <main>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>} 
            {imgUrl && <img className="img_cat" src={`${CAT_REFIX_IMAGE_URL}${imgUrl}`} alt={`Image extrated using the fisrt word for ${fact}`} /> }
            <button className='btn_change' onClick={handleClick}>Get new fact</button>
        </main>
        
    )
}