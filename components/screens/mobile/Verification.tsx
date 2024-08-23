import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";

const VerificationMobile = () => {
  const router = useRouter();

  const handleContd = () => router.push("/");
  const handleResend = () => router.reload();

  return (
    <div className="w-[390px] h-[806px] px-4 py-6 flex-col justify-start items-center gap-8 inline-flex lg:hidden">
      <div className="w-[200px] h-[25.72px] relative mt-5">
        <Logo />
      </div>
      <div className="self-stretch h-[60px] mt-12 flex-col justify-center items-center gap-1 flex">
        <div className="self-stretch text-center text-zinc-800 text-[32px] font-bold ">
          Insert verification code
        </div>
        <div className="text-center text-zinc-500 text-sm font-medium mb-5">
          Please check your email and insert the code we sent
        </div>
      </div>

      <div className="self-stretch justify-center items-center gap-2 mt-4 inline-flex">
        <div className="grow shrink basis-0">
          <Input
            className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
            placeholder="0"
          />
        </div>
        <div className="grow shrink basis-0">
          <Input
            className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
            placeholder="0"
          />
        </div>
        <div className="grow shrink basis-0">
          <Input
            className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
            placeholder="0"
          />
        </div>
        <div className="grow shrink basis-0">
          <Input
            className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
            placeholder="0"
          />
        </div>
        <div className="grow shrink basis-0">
          <Input
            className="grow shrink basis-0 h-[42px] text-center placeholder:text-zinc-400 text-base font-normal"
            placeholder="0"
          />
        </div>
      </div>

      <Button
        onClick={handleResend}
        variant="outline"
        className="self-stretch h-[42px] px-6 py-3.5 bg-white rounded-[14px] justify-center items-center gap-1.5 inline-flextext-center text-orange-400 text-sm font-medium  leading-normal"
      >
        Resend the code
      </Button>

      <div className="absolute bottom-0 w-full px-4 py-3 border-t border-t-[#ECECE9]">
        <Button
          onClick={handleContd}
          className=" border-t w-full h-[42px] px-3 py-1.5 bg-[#FFA43C] rounded-[14px] justify-center items-center gap-1.5  text-center text-white text-sm font-medium leading-normal"
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default VerificationMobile;
