import { useEffect } from "react"

export const useDocumentTitle = (title) => {
    
    useEffect(() => {
        document.title = `${title} / Cinemate`
    }, [title])

    return null
}
