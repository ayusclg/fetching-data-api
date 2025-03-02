import { useState } from "react"


function useFetchPosts(){
    const [posts,setPosts] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] =useState(false)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>{
                    setPosts(data)
                    setIsLoading(false)})
    .catch((err)=> {
                    setIsError(true)
                    isLoading(false)})

        return {posts,isLoading,isError}
}
export default useFetchPosts