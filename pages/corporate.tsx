import CategoryCard from "@/components/CategoryCard";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/constants";
import { useRouter } from "next/router";
import React from "react";
import { TbPhotoFilled } from "react-icons/tb";

const Corporate = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center relative">
      <div className="w-[400px] h-full px-4 py-6 flex-col justify-center items-center gap-8 mx-auto inline-flex">
        <div className="w-[200px]">
          <Logo />
        </div>
        <div
          className="self-stretch h-[18px]
         flex-col justify-center items-center mt-4 flex"
        >
          <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold whitespace-nowrap">
            Create new corporate
          </div>
          <div className="text-center text-zinc-500 text-sm font-medium mb-5 lg:whitespace-nowrap">
            Please insert your corporate details
          </div>
        </div>

        <div className="self-stretch h-[145px] flex-col justify-start items-center inline-flex">
          <div className="text-center text-zinc-800 text-sm font-medium">
            Corporate brand logo
          </div>
          <div className="mt-4 justify-center items-start gap-3 inline-flex">
            <div className="w-36 h-[120px] p-2 bg-zinc-100 rounded-[18px] justify-center items-center gap-2 flex">
              <div className="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                <div className="w-8 h-8 relative">
                  <TbPhotoFilled size={28} color="#7E7E7E" />
                </div>
                <div className="w-24 text-center text-[#7E7E7E] text-[15px] leading-snug">
                  Add media
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-[67px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-center text-zinc-800 text-sm font-medium">
            Corporate name
          </div>

          <div className="self-stretch h-[42px] flex-col justify-start items-start gap-1 inline-flex">
            <Input
              className="self-stretch h-[42px] px-1.5 grow shrink justify-start items-center gap-2 inline-flex basis-0 placeholder:text-zinc-400"
              placeholder="Insert text"
            />
          </div>
        </div>

        <div className="self-stretch h-[67px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-center text-zinc-800 text-sm font-medium">
            Description
          </div>

          <div className="self-stretch h-[42px] flex-col justify-start items-start inline-flex">
            <Textarea
              className="self-stretch h-[42px] px-1.5 grow shrink justify-start items-center gap-2 inline-flex basis-0 placeholder:text-zinc-400"
              placeholder="Insert text"
            />
          </div>
        </div>

        <div className="self-stretch h-[67px] flex-col justify-start items-start gap-1 mt-2 inline-flex">
          <div className="text-center text-zinc-800 text-sm font-medium">
            Corporate website
          </div>

          <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 inline-flex">
            <Input
              className="self-stretch h-[42px] px-1.5 grow shrink justify-start items-center gap-2 inline-flex basis-0 placeholder:text-zinc-400"
              placeholder="Website"
            />
          </div>
        </div>
        <div className="text-left text-zinc-800 text-sm font-medium w-full">
          Category of interest
        </div>
        <div className="flex flex-row space-x-4 overflow-y-auto scrollbar-hide max-w-sm lg:max-w-screen-lg px-1">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              emoji={category.emoji}
            />
          ))}
        </div>

        <div className="absolute bottom-0 w-full flex flex-row justify-between space-x-3 px-4 py-3 border-t border-t-[#ECECE9]">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="  w-full h-[42px] px-3 py-1.5 rounded-[14px] justify-center items-center gap-1.5 border-[#FFA43C] text-[#FFA43C]  text-center  text-sm font-medium leading-normal"
          >
            Back
          </Button>
          <Button
            onClick={() => router.push("/")}
            className=" w-full h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5  text-center text-white text-sm font-medium leading-normal"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
