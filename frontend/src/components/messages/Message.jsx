import React from 'react'

function Message() {
  return (
    <div className='chat  chat-end'>
      <div className='chat-image avatar '>
        <div className='w-10 rounded-full'>
            <img src="https://avatar.iran.liara.run/public/boy?username=shivam123" alt="chat bubble" />
            {/* https://avatar.iran.liara.run/public/boy?username=asdfasd */}
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp?</div>
      <div className="chat-footer opacity-50 text-gray-400 ">Seen at 12:46</div>
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