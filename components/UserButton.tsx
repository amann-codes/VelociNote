"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function UserButton() {
  const { data: session } = useSession();
  const [pfp, setPfp] = useState(false);
  const image = !!session?.user?.image;
  if (image) setPfp(true);
  return (
    <>
      <p>Hi, {session?.user?.name}</p>
      {pfp && (
        <img
          src={session?.user?.image || ""}
          onClick={() => {
            signOut();
          }}
          className="cursor-pointer size-12 rounded-full"
        ></img>
      )}
    </>
  );
}
