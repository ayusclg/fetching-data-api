import React from 'react'
import useFetchPosts from '../hooks/useFetchPosts'

const Posts = () => {
    const {posts,isLoading,isError} = useFetchPosts()
    console.log('post',posts)
    if(isLoading) return <h1 className='text-9xl  w-screen h-screen mx-50 my-50'>LOADING ......</h1>
  return (
    
        <div className='min-h-screen bg-gradient-to-r from-sky-500 to-white'>
      <h1 className='text-4xl font-semibold text-center py-4'>Posts</h1>
    <div className='grid grid-cols-2 gap-2.5 '>
      {posts?.slice(0,10).map((el)=>{
        return(
            <article className='bg-white shadow-lg px-3 '>
                <div className='bg-indigo-200 h-2'></div>
                <h1 className='text-xl font-medium py-2.5'>{el.title}</h1>
                <p className=' leading-[180%] text-justify'>{el.body}</p>
        </article>
     ) })}
     
            </div>
      </div>    
    
  )
}

export default Posts
