import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Option = () => {
  const check = (id: string) => {
    const checkBox = document.getElementById(id) as HTMLInputElement | null;

    if (checkBox?.checked === true) {
      checkBox.checked = false;

      console.log("uncheck", id);
    } else if (checkBox?.checked === false) {
      checkBox.checked = true;
    } else {
      console.log(checkBox?.ariaChecked, id);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[390px] h-[806px] px-4 py-6 flex-col justify-start items-center gap-8 inline-flex ">
        <div className="w-[200px] h-[25.72px] relative mt-5">
          <Logo />
        </div>
        <div className="self-stretch h-[60px] mt-8 flex-col justify-center items-center gap-1 flex">
          <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold lg:whitespace-nowrap">
            Please select one option
          </div>
          <div className="text-center text-zinc-500 text-sm font-medium mb-5 lg:whitespace-nowrap">
            You still able to create new corporate once you join a corporate
          </div>
        </div>

        <div className="self-stretch justify-center flex-col lg:flex-row items-center gap-4 mt-4 inline-flex">
          <div
            onClick={() => check("check1")}
            className="w-[358px] h-[151px] lg:w-fit lg:h-fit px-4 py-6 bg-white rounded-2xl border border-stone-200 flex-col justify-center items-start gap-2 inline-flex"
          >
            <div className="w-6 h-6 relative">
              <input
                type="checkbox"
                id="check1"
                className="rounded-full bg-black"
              />
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 text-zinc-800 text-2xl font-bold lg:whitespace-nowrap">
                Join existed corporate
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 text-stone-500 text-sm font-normal lg:whitespace-nowrap">
                I have an invitation code and want to join a corporate.
              </div>
            </div>
          </div>

          <div
            onClick={() => check("check2")}
            className="w-[358px] h-[151px] lg:w-fit lg:h-fit px-4 py-6 bg-white rounded-2xl border border-stone-200 flex-col justify-center items-start gap-2 inline-flex"
          >
            <div className="w-6 h-6 relative">
              <input type="checkbox" id="check2" className="rounded-full " />
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 text-zinc-800 text-2xl font-bold lg:whitespace-nowrap">
                Create new corporate
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 text-stone-500 text-sm font-normal lg:whitespace-nowrap">
                I want to create my business corporate account.
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full px-4 py-3 border-t border-t-[#ECECE9]">
          <Button className=" border-t w-full h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5  text-center text-white text-sm font-medium leading-normal">
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Option;
