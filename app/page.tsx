"use client";
import React from "react";
import Appbar from "@/components/Appbar";
import { useSession } from "next-auth/react";
export default function page() {
  const session = useSession();
  const data = JSON.stringify(session);
  console.log(session.data?.user?.name);
  return (
    <div className="w-screen h-screen bg-[#F0F4F8]">
      <Appbar />
      <h1>Hi {session.data?.user?.name}</h1><br/>
      {data}<br/>
      <img src={session.data?.user?.image?.toString()} width={40} height={40} className="rounded-full"></img>
    </div>
  );
}
