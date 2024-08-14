import React from 'react'

// Components
import Color from './Color'
import { useSelector } from 'react-redux'

const Colors = () => {

const colors = useSelector((state) => state.colors.colors)

  return (
    <div className='my-10'>
    <h1 className='text-[14px] text-[#0E1422] font-medium mb-4'>Colors</h1>

<ul className='flex gap-[10px] flex-wrap' >

{
  colors.map((color) => {
    return <Color color={color}/>
  })
}


</ul>

</div>
  )
}

export default Colors