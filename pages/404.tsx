import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFoundPage(){
    const router  = useRouter()
    useEffect(() => {
      setTimeout(() => {
        router.push('/d/dashboard')
      },2000)
    }, [])
    
    return (
        <div>
            <h1 className="text-xl text-center">Page not found :( </h1>
        </div>
    )
}