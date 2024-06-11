import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex mt-1'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-gray-400'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900' />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-gray-400'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900' />
        </label>
      </div> 
    </div>
  )
}

export default GenderCheckbox


//Starter code for the GENDER 

// function GenderCheckbox() {
//     return (
//       <div className='flex mt-1'>
//         <div className='form-control'>
//           <label className={`label gap-2 cursor-pointer`}>
//               <span className='label-text text-gray-400'>Male</span>
//               <input type="checkbox" className='checkbox border-slate-900' />
//           </label>
//         </div>
//         <div className='form-control'>
//           <label className={`label gap-2 cursor-pointer`}>
//               <span className='label-text text-gray-400'>Female</span>
//               <input type="checkbox" className='checkbox border-slate-900' />
//           </label>
//         </div> 
//       </div>
//     )
//   }
  