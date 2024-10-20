import { Plus } from "lucide-react";
import React from "react";
import Tooltip from "./Tooltip";

interface AddorgProps {
  open: () => void;
}

export default function AddOrg({ open }: AddorgProps) {
  return (
    <Tooltip text="Create Organization">
      <Plus
        onClick={open}
        className="text-white bg-blue-500 opacity-85 rounded-md size-10 hover:opacity-60 cursor-pointer"
      />
    </Tooltip>
  );
}
