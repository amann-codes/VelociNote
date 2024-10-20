"use client";
import React, { useState } from 'react'
import AddOrg from './Organization/AddOrg';
import Stepper from './Organization/Stepper';
import OrgFace from './Organization/OrgFace';

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className='flex flex-col fixed z-[1] left-0 h-full gap-y-4 p-3 bg-blue-300'>
      <OrgFace/>
      <AddOrg open={()=>setOpen(true)}/>
      {open&&
      <Stepper close={()=>setOpen(false)}/>
      }
    </aside>
  )
}