// components/common/SectionTitle.tsx

import React from "react";

type Props = {
  title: string;
  lineColor?: string;
  textColor?: string;
  borderSize?: string;
};

export default function SectionTitle({
  title,
  lineColor,
  textColor = "text-primary",
  borderSize,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-4 my-8 w-full">
      <div className={`flex-1  w-full ${lineColor} ${borderSize}`}></div>
      <h2 className={`text-center text-[25px] font-semibold ${textColor}`}>
        {title}
      </h2>
      <div className={`flex-1  w-full ${lineColor} ${borderSize}`}></div>
    </div>
  );
}
