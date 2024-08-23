import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

const HandPhoneMobile = () => {
  const router = useRouter();
  const handleBack = () => router.back();
  const handleContd = () => router.push("/verification");
  return (
    <div className="w-[390px] h-[806px] px-4 py-6 flex-col justify-start items-center gap-8 inline-flex lg:hidden">
      <div className="w-[200px] h-[25.72px] relative mt-5">
        <Logo />
      </div>
      <div className="self-stretch h-[60px] mt-12 flex-col justify-center items-center gap-1 flex">
        <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold ">
          Login with phone number
        </div>
        <div className="text-center text-zinc-500 text-sm font-medium mb-5">
          Please insert your phone number linked to JioYouOut account
        </div>
      </div>
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <div className="self-stretch h-[67px] flex-col justify-start items-start gap-2 flex">
          <div className="text-center text-zinc-800 text-sm font-medium "></div>
          <div className="self-stretch h-[42px] justify-start items-center inline-flex">
            <Input
              placeholder="Insert your phone number"
              className="placeholder:text-zinc-400 h-full grow shrink basis-0 text-center text-zinc-400"
            />
          </div>
        </div>
      </form>
      <div className="self-stretch h-[108px] flex-col justify-center items-center gap-3 flex">
        <Button
          onClick={handleContd}
          className=" border-t w-full h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5  text-center text-white text-sm font-medium leading-normal"
        >
          CONTINUE
        </Button>

        <Button
          onClick={handleBack}
          variant="outline"
          className="self-stretch h-[42px] px-6 py-3.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flextext-center text-orange-400 text-sm font-medium  leading-normal"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default HandPhoneMobile;
