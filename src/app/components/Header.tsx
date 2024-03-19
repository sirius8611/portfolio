import React from 'react'

const Header = ({title}: {title: string}) => {
  return (
    <div className='text-center py-20 border-y-2'>
      <h1 className='text-4xl uppercase'>{title}</h1>
    </div>
  )
}

export default Header