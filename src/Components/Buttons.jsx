import React from 'react'

const Buttons = ({children}) => {
  return (
    <div>
            <button className='bg-[#0E1422] py-3 px-6 gap-[6px] text-[#FFFFFF] text-[14px] hover:bg-[#0075ff] font-medium rounded-[4px] flex '>{children}
    
            </button>
    </div>
  )
}

export default Buttons
