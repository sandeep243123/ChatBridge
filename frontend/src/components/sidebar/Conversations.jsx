import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import {getEmojis} from '../../utils/emojis.js';

function Conversations() {
  const {loading,conversations}=useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto '>
      {conversations.map((conversation,idx)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        lastIdx={idx===conversations.length-1}
        emoji={getEmojis()}
        />
      ))}

      {loading?<span className='loading loading-spinner  text-gray-400'></span>:null}
    </div>
  )
}

export default Conversations



// function Conversations() {
//     return (
//       <div className='py-2 flex flex-col overflow-auto '>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//         <Conversation></Conversation>
//       </div>
//     )
//   }
  