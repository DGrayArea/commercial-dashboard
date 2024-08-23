import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import React from "react";

const Option = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[390px] h-[806px] px-4 py-6 flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-[200px] h-[25.72px] relative mt-5">
          <Logo />
        </div>
        <div className="self-stretch h-[60px] mt-3 flex-col justify-center items-center gap-1 flex">
          <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold whitespace-nowrap">
            Insert verification code
          </div>
          <div className="text-center text-zinc-500 text-sm font-medium mb-5 lg:whitespace-nowrap">
            Find the invitation code on your email and copy bellow
          </div>
        </div>

        <div className="self-stretch justify-center items-center gap-2 mt-4 inline-flex">
          <div className="w-[358px] h-[42px] flex-col justify-start items-start gap-2 inline-flex">
            <Input
              className="self-stretch h-[42px] px-1.5 grow shrink justify-start items-center gap-2 inline-flex basis-0 text-center placeholder:text-zinc-400"
              placeholder="ex: AF254J9Q"
            />
          </div>
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

export default Option;
