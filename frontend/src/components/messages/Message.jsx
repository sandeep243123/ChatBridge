import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {
  const  { authUser }=useAuthContext();
  const {selectedConversation}=useConversation()
  const fromMe=message.senderId===authUser._id; 
  const chatClassName= fromMe?'chat-end':'chat-start';
  const profilePic= fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor=fromMe?'bg-blue-500':"";
  const shakeClass=  message.shouldShake?"shake":""; 
  return (
    
    <div className={`chat ${ chatClassName}`}>
      <div className='chat-image avatar '>
        <div className='w-10 rounded-full'>
            <img src={profilePic} alt="chat bubble" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message }</div> 
      <div className="chat-footer opacity-50 text-gray-400 ">{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message


// function Message() {
//     return (
//       <div className='chat  chat-end'>
//         <div className='chat-image avatar '>
//           <div className='w-10 rounded-full'>
//               <img src="https://avatar.iran.liara.run/public/boy?username=shivam123" alt="chat bubble" />
//               {/* https://avatar.iran.liara.run/public/boy?username=asdfasd */}
//           </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp?</div>
//         <div className="chat-footer opacity-50 text-gray-400 ">Seen at 12:46</div>
//       </div>
//     )
//   }