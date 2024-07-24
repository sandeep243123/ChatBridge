import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';


function LogoutButton() {
  const {loading,logout}=useLogout( )
  return (
    <div className='my-auto'>
      {!loading ?(
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ):(
        <span className="loading loading-spinner text-gray-400"></span>
      )}
    </div>
  )
}

export default LogoutButton




// function LogoutButton() {
//     return (
//       <div className=' my-auto'>
//         <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
//       </div>
//     )
//   }
  