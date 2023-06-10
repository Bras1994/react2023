import { useState, useEffect } from "react"
import {getRandomFact} from '../service/facts.js'

export const useCatFact = () =>{
    const [fact, setFact] = useState()

    // para recuperar la cira al cargar la pagina
    const refreshFact = ()=>{
        // Metodo que actualiza, que nos recupera nuevo datos y actualiza el estado interno.
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact,[])

    return {fact, refreshFact}
}
