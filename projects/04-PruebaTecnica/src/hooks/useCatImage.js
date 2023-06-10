import { useEffect, useState } from "react"


export function useCatImage ({fact}){
    const [imgUrl, setImgUrl] = useState()

    useEffect(()=>{
        if (!fact) return

        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                .then (res => res.json())
                .then(response => {
                    const {url} = response
                    setImgUrl(url)
                })
    },[fact])
    return { imgUrl }
}