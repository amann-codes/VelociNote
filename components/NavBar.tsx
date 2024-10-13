import React from 'react'
import UserButton from './UserButton'

export default function NavBar() {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-500'>
      <div className='hidden lg:flex flex-1 bg-green-600 p-3'>Search</div>
      <UserButton/>
      </div>
  )
}
