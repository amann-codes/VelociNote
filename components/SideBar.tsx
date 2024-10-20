"use client";
import React, { useState } from 'react'
import AddOrg from './Organization/AddOrg';
import Stepper from './Organization/Stepper';

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className='flex flex-col justify-center fixed z-[1] left-0 h-full gap-y-4 p-3 bg-blue-300'>
      <AddOrg open={()=>setOpen(true)}/>
      {open&&
      <Stepper close={()=>setOpen(false)}/>
      }
    </aside>
  )
}