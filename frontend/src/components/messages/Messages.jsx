import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

function Messages() {
  const {messages,loading }=useGetMessages()
   useListenMessages();

  const lastMessageRef=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)
  },[messages])
  return (
    <div className='px-1 flex-1  overflow-auto'>
      {!loading&&messages.length>0 && messages.map((message)=>(
        <div  key={message._id} ref={lastMessageRef}>  
          <Message message={message}/>
        </div>
      ))}
      {loading&&[...Array(3)] .map((_,idx)=><MessageSkeleton key={idx}/>)}
      {!loading&& messages.length===0&&(
        <p className='text text-center text-gray-400 '>Send a message to start a Conversation</p>
      )}
    </div> 
  )
}

export default Messages



// function Messages() {
//     return (
//       <div className='px-1 flex-1  overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//       </div>
//     )
//   }
  