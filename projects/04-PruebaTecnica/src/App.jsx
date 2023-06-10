import { useState, useEffect } from "react"
import './app.css'

const CAT_REFIX_IMAGE_URL='https://cataas.com'

export function App (){
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState()

    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then (res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
            const firstWord = fact.split(' ', 3).join(' ')
            console.log(firstWord)

            fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                .then (res => res.json())
                .then(response => {
                    const {url} = response
                    setImgUrl(url)
                })
        })
    },[])
    
    return(
        <main>
            <h1>App de Gatitos</h1>

            {fact && <p>{fact}</p>} 
            {imgUrl && <img className="img_cat" src={`${CAT_REFIX_IMAGE_URL}${imgUrl}`} alt={`Image extrated using the fisrt word for ${fact}`} /> }

        </main>
        
    )
}