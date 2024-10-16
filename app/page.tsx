"use client";
import React from "react";
import Appbar from "@/components/Appbar";
import { useSession } from "next-auth/react";
export default function page() {
  const session = useSession();
  const data = JSON.stringify(session);
  console.log(session.data?.user?.name);
  return (
    <p>{data}</p>
  );
}
