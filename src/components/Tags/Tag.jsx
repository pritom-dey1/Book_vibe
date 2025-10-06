import React from 'react'

const Tag = ({taag}) => {
    
    const tag = taag
  return (
    <div className='bg-[#23be0a] rounded-[30px] text-[#fff] w-fit py-1 px-2.5 text-[12px]'>{tag}</div>
  )
}

export default Tag