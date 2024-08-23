import { Catrgory } from "@/types";
import React from "react";

const CategoryCard = ({ emoji, name }: Catrgory) => {
  return (
    <div className="w-[150px] h-[38px] px-4 py-[11.40px] bg-zinc-100 rounded-[10px] justify-center items-center gap-2 inline-flex">
      <div className="text-center text-zinc-800 text-lg font-normal whitespace-nowrap">
        {emoji}
      </div>
      <div className="text-center text-zinc-800 text-sm font-medium whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;
