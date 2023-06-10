import { useState, useEffect } from 'react'
import './app.css'
import {getRandomFact} from './service/facts.js'
import{useCatImage} from './hooks/useCatImage.js'

const CAT_REFIX_IMAGE_URL='https://cataas.com'



export function App (){
    const [fact, setFact] = useState()
    const { imgUrl } = useCatImage ({fact })

    // para recuperar la cira al cargar la pagina
    useEffect(()=> {
        getRandomFact().then(newFact => setFact(newFact))
    },[])


    const handleClick = async()=>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }
    
    return(
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>} 
            {imgUrl && <img className="img_cat" src={`${CAT_REFIX_IMAGE_URL}${imgUrl}`} alt={`Image extrated using the fisrt word for ${fact}`} /> }

        </main>
        
    )
}