"use client";
import React from "react";
import Appbar from "@/components/Appbar";
import { useSession } from "next-auth/react";
export default function page() {
  const session = useSession();
  const data = JSON.stringify(session);
  console.log(session.data?.user?.name);
  return (
    <div className="w-screen h-screen bg-lime-100">
      <Appbar />
      <h1>HIII</h1>
      {data}{session.data?.user?.name}
      <img src={session.data?.user?.image?.toString()} className="rounded-full"></img>
    </div>
  );
}
