import { Plus } from "lucide-react";
import React from "react";

interface AddorgProps {
  open: () => void;
}

export default function AddOrg({ open }: AddorgProps) {
  return (
    <Plus
      onClick={open}
      className="text-white bg-blue-500 opacity-85 rounded-md size-10 hover:opacity-60 cursor-pointer"
    />
  );
}
