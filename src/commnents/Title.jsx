import { useEffect } from "react"


export const TitleUse = (title)=>{

    useEffect(()=>{

        document.title = `Event Explorer || ${title}`

    },[title])
}