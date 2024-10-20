import React, { ReactNode } from "react";

interface Tip {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ children, text }: Tip) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute translate-x-16 -translate-y-[110%] bg-black font-medium text-white rounded-md px-3 py-1 w-max text-nowrap z-10 scale-90 opacity-80 invisible transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 group-hover:visible group-hover:delay-[100ms]">
        {text}
      </div>
    </div>
  );
}
