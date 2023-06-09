import { useState, useEffect } from "react"

export function App (){
    const [fact, setFact] = useState()

    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then (res => res.json())
        .then(data => setFact(data.fact))
    },[])
    return(
        <main>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>} 
        </main>
        
    )
}